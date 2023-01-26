// utils
import { images } from '../../utils/images';

// components
import { LatestGames } from './LatestGames';
import { LoadingTemplate } from '../../components/Loading';
import { Error } from '../../components/Error';
import { useGames } from '../../hooks/useGames';

export const Home = () => {
    const { status, error, data: games } = useGames();

    if (error) {
        return <Error error={error} />;
    }

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src={images.heroImg} alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {status == 'loading' ? (
                    <LoadingTemplate />
                ) : (
                    <LatestGames games={games} />
                )}
            </div>
        </section>
    );
};
