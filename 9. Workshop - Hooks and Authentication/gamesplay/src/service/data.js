import { errorHandler } from '../utils/handleError';

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    game: (id) => `/games/${id}`,
    comments: (gameId) => `/comments?where=gameId%3D%22${gameId}%22`,
};

export const getById = async (id) => {
    const res = await fetch(BASE_URL + endpoints.game(id));

    return errorHandler(res);
};

export const getCommentsById = async (gameId) => {
    const res = await fetch(BASE_URL + endpoints.comments(gameId));

    return errorHandler(res);
};
