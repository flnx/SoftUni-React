import { AuthContext } from '../../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { fetchGames } from '../../service/data';

export const Navbar = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    const queryClient = useQueryClient();

    const fetchGamesHomeOnHover = () => {
        if (location.pathname == '/') return

        queryClient.prefetchQuery({
            queryKey: ['games'],
            queryFn: fetchGames
        });
    }   

    return (
        <nav>
            <div className="nav-wrapper">
                <h1>
                    <Link className="home" to="/" onMouseEnter={fetchGamesHomeOnHover}>
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
