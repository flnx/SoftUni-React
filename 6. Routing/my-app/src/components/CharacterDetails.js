import { useLoaderData } from 'react-router-dom';

export default function CharacterDetails() {
    const character = useLoaderData();

    return (
        <>
            <p className="person__name">Name: {character.name}</p>
            <p className="person__info">Height: {character.height}</p>
            <p className="person__info">Birth Year: {character.birth_year}</p>
            <p className="person__info">Eyes: {character.eye_color}</p>
        </>
    );
}

export const characterDetailsLoader = async ({ params }) => {
    const { id } = params;

    const response = await fetch('https://swapi.dev/api/people/' + id);

    if (!response.ok) {
        throw Error('Cannot find this character');
    }

    return response.json();
};
