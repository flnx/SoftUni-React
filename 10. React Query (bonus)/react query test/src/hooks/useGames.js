import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import { useQuery, useQueries, useMutation, useQueryClient} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchGames, getById, getCommentsById, remove, create} from '../service/data';

export const useGames = () => {
    return useQuery({ 
        queryKey: ['games'], 
        queryFn: fetchGames 
    });
};

export const useGameDetails = (gameId) => {
    const [gameData, commentsData] = useQueries({
        queries: [
            {
                queryKey: ['games', gameId],
                queryFn: () => getById(gameId),
            },
            {
                queryKey: ['comments', gameId],
                queryFn: () => getCommentsById(gameId),
                staleTime: 1 * (60 * 1000),
                // refetchInterval: 5 * (60 * 1000),

            },
        ],
    });
 
    const { data: game, isLoading: isGameLoading, error: gameError } = gameData;

    const { data: comments, isLoading: areCommentsLoading } = commentsData;

    return {
        game,
        isGameLoading,
        gameError,
        comments,
        areCommentsLoading,
    };
};


export const useAddNewGame = () => {
    const queryClient = useQueryClient();
    const { auth } = useContext(AuthContext);

    const {
        error: gameError,
        mutate: createPost,
        isLoading,
    } = useMutation({
        mutationFn: (gameData) => create(gameData, auth.accessToken),
        onSuccess: (newGame) => {
            queryClient.setQueryData(['games', newGame._id], newGame);
            queryClient.invalidateQueries(['games'], { exact: true }); 
        },
    });

    return {
        gameError,
        createPost,
        isLoading,
    };
};

export const useRemoveGame = (gameId) => {
    const queryClient = useQueryClient();
    const { auth } = useContext(AuthContext);

    const {
        isLoading: isRemoving,
        error: removingError,
        mutate: removeGame,
    } = useMutation({
        mutationFn: () => remove(auth.accessToken, gameId),
        onSuccess: () => {
            queryClient.setQueryData(['games'], (old) => 
                old.filter((game) => game._id !== gameId)
            ),
            queryClient.invalidateQueries(['games'], { exact: true });
        },
    });

    return {
        removeGame,
        isRemoving,
        removingError,
    };
};

