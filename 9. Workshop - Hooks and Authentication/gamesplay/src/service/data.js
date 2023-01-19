import { errorHandler } from '../utils/handleError';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    game: (id) => `/games/${id}`,
    comments: (gameId) => `/comments?where=gameId%3D%22${gameId}%22`,
    games: '/games',
};

export const getById = async (id) => {
    const res = await fetch(BASE_URL + endpoints.game(id));

    return errorHandler(res);
};

export const getCommentsById = async (gameId) => {
    const res = await fetch(BASE_URL + endpoints.comments(gameId));

    return errorHandler(res);
};

export const create = (data, accessToken) => {
    return fetch(BASE_URL + endpoints.games, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify(data),
    }).then(errorHandler);
};
