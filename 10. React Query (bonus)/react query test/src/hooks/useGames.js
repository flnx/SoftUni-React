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
                // staleTime: 1 * (60 * 1000),
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

    const { error: gameError, mutate: createPost, isLoading } = useMutation({
        mutationFn: (gameData) => create(gameData, auth.accessToken),
        onSuccess: () => {
            // queryClient.setQueryData(['games', newGame]);
            queryClient.invalidateQueries(['games']);
        },
    });

    return {
        gameError,
        createPost,
        isLoading,
    };
};


export const useRemoveGame = () => {
    const queryClient = useQueryClient();
    const { auth } = useContext(AuthContext);

    const { isLoading: isRemoving, error: removingError, mutate: removeGame } = useMutation({
        mutationFn: (gameId) => remove(auth.accessToken, gameId),
        onSuccess: () => {
            queryClient.invalidateQueries(['games'])
        },
    });

    return {
        removeGame,
        isRemoving,
        removingError
    }
};

