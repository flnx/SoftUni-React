import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1>
                    <Link className="home" to="/">
                        GamesPlay
                    </Link>
                </h1>
                <div className="navbar">
                    <Link to="/catalog">All games</Link>
                    {/* Logged-in users */}
                    <div id="user">
                        <Link to="/create">Create Game</Link>
                        <Link to="#">Logout</Link>
                    </div>
                    {/* Guest users */}
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
