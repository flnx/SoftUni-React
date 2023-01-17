import { Link } from 'react-router-dom';

import zombieLang from '../../assets/images/ZombieLang.png';
import mineCraft from '../../assets/images/MineCraft.png';
import coverFire from '../../assets/images/CoverFire.png';

const images = {
    zombieLang: zombieLang,
    coverFire: coverFire,
    mineCraft: mineCraft,
};

export const Game = ({ game }) => {

    return (
        <div className="game">
            <div className="image-wrap">
                <img src={images[game.imageUrl]} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={`/catalog/${game._id}`} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
};
