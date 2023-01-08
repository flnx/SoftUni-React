import { Link, useLoaderData } from 'react-router-dom';
import { extractPersonId } from '../utils/extractPersonId';

function Characters() {
    const people = useLoaderData();

    return (
        <div className="people-wrapper">
            {people.results.map((person) => (
                <Person key={person.name} person={person} />
            ))}
        </div>
    );
}

function Person({ person }) {
    const id = extractPersonId(person.url);

    return (
        <Link to={id} key={id} className="person">
            <div>
                <p className="person__name">Name: {person?.name}</p>
                <p>Height: {person?.height}</p>
                <p>Birth Year: {person?.birth_year}</p>
                <p>Eyes: {person?.eye_color}</p>
            </div>
        </Link>
    );
}

export async function CharactersLoader() {
    // const test = await delay();
    const response = await fetch('https://swapi.dev/api/people/');
    return response.json();
}

// function delay() {
//     return new Promise(resolve => setTimeout(resolve, 2000));
// }

export default Characters;
