import { Outlet } from 'react-router-dom';

export default function CharactersLayout() {
    return (
        <>
            <h1>Characters Page</h1>
            <Outlet />
        </>
    );
}
