import { errorHandler } from '../utils/handleError';

const BASE_URL = 'http://localhost:3030';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

const userApi = async (method, endpoint, data, token) => {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    if (token) {
        config.headers['X-Authorization'] = token;
    }

    const res = await fetch(BASE_URL + endpoint, config);

    return errorHandler(res);
};

export const login = userApi.bind(null, 'POST', endpoints.login);
export const register = userApi.bind(null, 'POST', endpoints.register);
export const logout = userApi.bind(null, 'GET', endpoints.logout);
