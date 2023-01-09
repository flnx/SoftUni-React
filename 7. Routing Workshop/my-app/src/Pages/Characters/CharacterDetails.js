import { useParams } from 'react-router-dom';
import { getCharacter } from '../../Services/api';
import Character from '../../components/Character';
import { useEffect, useState } from 'react';

export default function CharacterDetails() {
    const [character, setCharacter] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getCharacter(id).then((characterData) => {
            setCharacter(characterData);
        });
    }, [id]);

    return character ? <Character person={character} /> : <p>Loading...</p>;
}
