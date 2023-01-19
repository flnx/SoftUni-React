import { useState, useEffect } from 'react';
import { errorHandler } from '../utils/handleError';

export const useFetch = (url, config = {}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url, config)
            .then(errorHandler)
            .then((result) => {
                setData(result);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message || err);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [url]);

    return [data, error, isPending];
};
