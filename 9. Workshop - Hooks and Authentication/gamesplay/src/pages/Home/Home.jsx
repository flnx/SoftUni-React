import heroImg from '../../assets/images/four_slider_img01.png';
import zombieImg from '../../assets/images/ZombieLang.png';
import mineCraftImg from '../../assets/images/MineCraft.png';
import coverFireImg from '../../assets/images/CoverFire.png';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src={heroImg} alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {/* Display div: with information about every game (if any) */}
                <div className="game">
                    <div className="image-wrap">
                        <img src={coverFireImg} />
                    </div>
                    <h3>Cover Fire</h3>
                    <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <Link to="/catalog/:id" className="btn details-btn">
                            Details
                        </Link>
                    </div>
                </div>
                {/* Display paragraph: If there is no games  */}
                {/* <p className="no-articles">No games yet</p> */}
            </div>
        </section>
    );
};
