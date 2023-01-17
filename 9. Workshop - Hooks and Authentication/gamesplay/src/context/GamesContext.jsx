import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const GamesContext = createContext();

const BASE_URL = 'http://localhost:3030/data/games';

export const GamesContextProvider = (props) => {
    const [games, error, isPending] = useFetch(BASE_URL);

    return (
        <GamesContext.Provider value={{ games, error, isPending }}>
            {props.children}
        </GamesContext.Provider>
    );
};
