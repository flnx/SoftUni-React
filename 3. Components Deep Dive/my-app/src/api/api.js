const host = 'http://localhost:3030/jsonstore/todos/';

async function request(method, url = '/', data) {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data !== undefined) {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, config);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export { get, post, put, del as delete };
