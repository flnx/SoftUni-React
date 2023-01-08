import { useLoaderData, useParams } from 'react-router-dom';

export default function CharacterDetails() {
    const character = useLoaderData();

    return (
        <div>
            <p className="person__name">Name: {character.name}</p>
            <p>Height: {character.height}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Eyes: {character.eye_color}</p>
        </div>
    );
}

export const characterDetailsLoader = async ({ params }) => {
    const { id } = params;

    const response = await fetch('https://swapi.dev/api/people/' + id);
    return response.json();
};
