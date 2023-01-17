import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw response;
                }

                return response.json();
            })
            .then((result) => {
                setData(result);
            })
            .catch((err) => {
                setError(err.statusText || "A server error has Occured");
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [url]);

    return [data, error, isPending];
};
