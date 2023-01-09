import { Link } from 'react-router-dom';

import { getCharacters } from '../../Services/api';
import { extractPersonId } from '../../Utils/extractPersonId';

import Character from '../../components/Character';
import { useEffect, useState } from 'react';

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then((characters) => {
            setCharacters(characters.results);
        });
    }, []);

    return (
        <div className="people-wrapper">
            {characters.length > 0 ? (
                characters.map((person) => (
                    <Link
                        to={extractPersonId(person.url)}
                        key={person.name}
                        className="person"
                    >
                        <Character person={person} />
                    </Link>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
