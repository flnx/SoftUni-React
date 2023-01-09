import { Link, useRouteError } from "react-router-dom";

export default function CharactersError() {
    const error = useRouteError();

    return (
        <div className="error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
}   