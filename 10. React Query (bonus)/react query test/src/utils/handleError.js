export const errorHandler = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw error;
    }

    if (response.status == 204) {
        return response;
    } else {
        return response.json();
    }
};
