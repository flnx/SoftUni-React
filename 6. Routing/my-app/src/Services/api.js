export const getCharacters = async () => {
    const response = await fetch('https://swapi.py4e.com/api/people/');

    if (!response.ok) {
        throw Error('Could not fetch the characters');
    }

    return response.json();
};

export const getCharacter = async (id) => {
    const response = await fetch('https://swapi.py4e.com/api/people/' + id);

    if (!response.ok) {
        throw Error('Cannot find this character');
    }

    return response.json();
}