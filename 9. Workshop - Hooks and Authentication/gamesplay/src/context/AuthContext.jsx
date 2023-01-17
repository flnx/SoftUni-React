import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [userData, setUserData] = useLocalStorage('userData', {});

    return (
        <AuthContext.Provider value={{ userData }}>
            {props.children}
        </AuthContext.Provider>
    );
};
