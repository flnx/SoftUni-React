import { useLoaderData } from 'react-router-dom';
import Character from '../../components/Character';

export default function CharacterDetails() {
    const character = useLoaderData();
    return (
        <Character person={character}/>
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
