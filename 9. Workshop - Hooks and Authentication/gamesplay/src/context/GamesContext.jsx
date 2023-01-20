import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const GamesContext = createContext();

const BASE_URL = 'http://localhost:3030/data/games';

export const GamesContextProvider = (props) => {
    const [fetchedGames, error, isPending] = useFetch(BASE_URL);
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames([...fetchedGames]);
    }, [fetchedGames]);

    const addGame = (newGame) => {
        setGames([...games, newGame]);
    };

    const deleteGame = (id) => {
        setGames((prevState) => prevState.filter((x) => x._id != id));
    };

    const updateGame = (updatedGame) => {
        setGames((prevState) =>
            prevState.map((x) => (x._id == updatedGame._id ? updatedGame : x))
        );
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
