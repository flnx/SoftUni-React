function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam, laborum.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam, laborum.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam, laborum.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam, laborum.
            </p>
        </div>
    );
}

export async function HomeLoader() {
    const response = await fetch('https://swapi.dev/api/people/1/');
    const reslut = await response.json();

    return reslut;
}

export default Home;

