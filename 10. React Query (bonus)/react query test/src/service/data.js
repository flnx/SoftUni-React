import { errorHandler } from '../utils/handleError';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    game: (id) => `/games/${id}`,
    comments: (gameId) => `/comments?where=gameId%3D%22${gameId}%22`,
    update: (id) => `/games/${id}`,
    remove: (id) => `/games/${id}`,
    games: '/games',
};

export const fetchGames = async () => {
    const res = await fetch(BASE_URL + endpoints.games);

    return errorHandler(res);
};

export const getById = async (id) => {
    const res = await fetch(BASE_URL + endpoints.game(id));

    return res.json();
};

export const getCommentsById = async (gameId) => {
    const res = await fetch(BASE_URL + endpoints.comments(gameId));

    return errorHandler(res);
};

export const create = (gameData, accessToken) => {
    return fetch(BASE_URL + endpoints.games, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify(gameData),
    }).then(errorHandler);
};

export const update = (data, accessToken, id) => {
    return fetch(BASE_URL + endpoints.update(id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify(data),
    }).then(errorHandler);
};

export const remove = (accessToken, id) => {
    return fetch(BASE_URL + endpoints.update(id), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
    }).then(errorHandler);
};
