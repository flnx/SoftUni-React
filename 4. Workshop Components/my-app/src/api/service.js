const URL = 'http://localhost:3030/jsonstore/users/';

export const createUser = async (data) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

export const getUsers = async () => {
    const res = await fetch(URL);
    return res.json();
}

export const getUser = async (userId) => {
    if (!userId) {
        return false;
    }

    const response = await fetch(URL + userId);
    const data = await response.json();

    return data;
};

export const deleteUser = async (userId) => {
    const res = await fetch(URL + userId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return res.json();
}