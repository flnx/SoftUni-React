import { useEffect, useReducer, useState } from 'react';
import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const GamesContext = createContext();

const BASE_URL = 'http://localhost:3030/data/games';

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GAMES':
            return action.payload.map((x) => ({ ...x, comments: [] }));

        case 'ADD_GAME':
            return [...state, action.payload];

        case 'DELETE_GAME':
            return state.filter((game) => game._id !== action.gameId);

        case 'EDIT_GAME':
            return state.map((game) =>
                game._id == action.gameId ? action.payload : game
            );

        default:
            return state;
    }
};

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
