export const getCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people/');

    if (!response.ok) {
        throw Error('Could not fetch the characters');
    }

    return response.json();
};

export const getCharacter = async (id) => {
    const response = await fetch('https://swapi.dev/api/people/' + id);

    if (!response.ok) {
        throw Error('Cannot find this character');
    }

    return response.json();
}