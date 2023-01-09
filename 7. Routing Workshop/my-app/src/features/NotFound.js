import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>404 Page not found</h1>
            <p>Go to the <Link to="/">Home Page</Link></p>
        </div>
    );

}
