export const errorHandler = async (response) => {
    if (!response.ok) {
        throw await response.json();
    }

    if (response.status == 204) {
        return response;
    } else {
        return response.json();
    }
};
