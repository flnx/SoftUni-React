import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const GamesContext = createContext();

export const GamesContextProvider = (props) => {
    const [games, error, isPending] = useFetch(
        'http://localhost:3030/data/games'
    );

    return (
        <GamesContext.Provider value={{ games, error, isPending }}>
            {props.children}
        </GamesContext.Provider>
    );
};
