import { useLoaderData, Await, defer } from 'react-router-dom';
import { Suspense } from 'react';

import Character from '../../components/Character';
import { getCharacter } from '../../Services/api';

export default function CharacterDetails() {
    const characterData = useLoaderData();

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={characterData.info}>
                {(characterData) => (
                    <Character
                        person={characterData}
                    />
                )}
            </Await>
        </Suspense>
    );
}

export const characterDetailsLoader = async ({ params }) => {
    const { id } = params;

    return defer({ info: getCharacter(id) });
};
