import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export const Navbar = () => {
    const { auth } = useContext(AuthContext);

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
                    {auth && auth.accessToken ? (
                        <div id="user">
                            <Link to="/create">Create Game</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    ) : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
