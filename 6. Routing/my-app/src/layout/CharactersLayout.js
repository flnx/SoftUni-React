import { Outlet } from "react-router-dom";

export default function CharactersLayout() {
    return (
        <section>
            <h1>Characters Page</h1>
            <Outlet />
        </section>
    );
}