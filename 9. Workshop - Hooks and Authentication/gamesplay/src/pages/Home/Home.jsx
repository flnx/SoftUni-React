import heroImg from '../../assets/images/four_slider_img01.png';

import { useContext } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { Game } from './Game';

export const Home = () => {
    const { games, error, isPending } = useContext(GamesContext);

    const GamesTemplate = () => {
        if (games.length > 0) {
            return (
                games.map((game) => <Game key={game._id} game={game} />)
            );
        }

        return <p className="no-articles">No games yet</p>
    }

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src={heroImg} alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {isPending 
                    ? <LoadingTemplate />
                    : error 
                        ? <p className="no-articles"> {error}: Couldn't fetch the data </p>
                        : <GamesTemplate />        
                }
  
            </div>
        </section>
    );
};

const LoadingTemplate = () => {
    return <p className="no-articles">Loading...</p>;
};
