// import { useLoaderData, useNavigation } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function Home() {
    // const person = useLoaderData();
    // const navigation = useNavigation();

    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/1/')
            .then(res => res.json())
            .then(p => setPerson(p));
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Name: {person?.name}</p>
            <p>Height: {person?.height}</p>
            <p>Birth Year: {person?.birth_year}</p>
            <p>Eyes: {person?.eye_color}</p>
        </div>
    );
}

// export async function HomeLoader() {
//     const test = await delay();
//     console.log(test);

//     const response = await fetch('https://swapi.dev/api/people/1/');
//     const personData = await response.json();

//     return personData
// }

// function delay() {
//     return new Promise(resolve => setTimeout(resolve, 2000));
//   }
