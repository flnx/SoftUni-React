import { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { gameReducer } from '../utils/gameReducer';

export const GamesContext = createContext();

const BASE_URL = 'http://localhost:3030/data/games';

export const GamesContextProvider = (props) => {
    const [fetchedGames, error, isPending] = useFetch(BASE_URL);

    const [games, dispatch] = useReducer(gameReducer, []);

    useEffect(() => {
        dispatch({
            type: 'ADD_GAMES',
            payload: fetchedGames,
        });
    }, [fetchedGames]);

    const addGame = (newGame) => {
        dispatch({
            type: 'ADD_GAME',
            payload: newGame,
        });
    };

    const deleteGame = (gameId) => {
        dispatch({
            type: 'DELETE_GAME',
            gameId,
        });
    };

    const updateGame = (updatedGame) => {
        dispatch({
            type: 'EDIT_GAME',
            payload: updatedGame,
            gameId: updatedGame._id,
        });
    };

    const findGameById = (id) => {
        return games.find((game) => game._id == id);
    };

    return (
        <GamesContext.Provider
            value={{
                games,
                error,
                isPending,
                addGame,
                findGameById,
                updateGame,
                deleteGame,
            }}
        >
            {props.children}
        </GamesContext.Provider>
    );
};
