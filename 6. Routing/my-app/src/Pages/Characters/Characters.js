import { Link, useLoaderData } from 'react-router-dom';
import { extractPersonId } from '../../Utils/extractPersonId';
import Character from '../../components/Character';

function Characters() {
    const people = useLoaderData();

    return (
        <div className="people-wrapper">
            {people.results.map((person) => (
                <Link
                    to={extractPersonId(person.url)}
                    key={person.name}
                    className="person"
                >
                    <Character person={person} />
                </Link>
            ))}
        </div>
    );
}

export async function CharactersLoader() {
    const response = await fetch('https://swapi.dev/api/people/');

    if (!response.ok) {
        throw Error('Could not fetch the characters');
    }

    return response.json();
}

export default Characters;
