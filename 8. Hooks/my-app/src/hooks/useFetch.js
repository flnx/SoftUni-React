import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);

                setTodos(Object.values(data));
            });
    }, [url]);

    return [todos, setTodos, isLoading];
};
