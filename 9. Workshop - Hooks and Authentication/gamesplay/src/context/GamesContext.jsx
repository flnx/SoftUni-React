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

    return (
        <GamesContext.Provider value={{ games, error, isPending, addGame }}>
            {props.children}
        </GamesContext.Provider>
    );
};
