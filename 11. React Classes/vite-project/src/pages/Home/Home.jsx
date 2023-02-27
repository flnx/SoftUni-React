import { useContext } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { LoadingTemplate } from '../../components/Loading';
import { Error } from '../../components/Error';
import { images } from '../../utils/images';
import { LatestGames } from './LatestGames';

export const Home = () => {
    const { games, error, isPending } = useContext(GamesContext);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src={images.heroImg} alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {isPending ? 
                    <LoadingTemplate />
                  : error ? 
                    <Error error={error} />
                  : 
                    <LatestGames games={games} />
                 }
            </div>
        </section>
    );
};
