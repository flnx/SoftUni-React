import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

import Character from '../../components/Character';

import { extractPersonId } from '../../Utils/extractPersonId';
import { getCharacters } from '../../Services/api';


function Characters() {
    const charactersData = useLoaderData();

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={charactersData.info}>
                    {(charactersData) => (
                        <div className="people-wrapper">
                            {charactersData.results.map((person) => (
                                <Link
                                    to={extractPersonId(person.url)}
                                    key={person.name}
                                    className="person"
                                >
                                    <Character person={person} />
                                </Link>
                            ))}
                        </div>
                    )}
                </Await>
            </Suspense>
        </>
    );
}

export function CharactersLoader() {
    return defer({ info: getCharacters() });
}

export default Characters;
