import { errorHandler } from '../utils/handleError';

const BASE_URL = 'http://localhost:3030';

const endpoints = {
    getGameById: (id) => `/games/${id}`
}

const getById = (id) => {
    return fetch(BASE_URL, endpoints.getGameById(id))
        .then(errorHandler)
}