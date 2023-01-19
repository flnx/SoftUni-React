import { Link } from 'react-router-dom';
import { images } from '../../utils/images';

export const LatestGames = ({ games }) => {
    return (
        <>
            {games.length > 0 ? (
                games.map((game) => (
                    <div className="game" key={game._id}>
                        <div className="image-wrap">
                            <img src={images[game.imageUrl] || game.imageUrl} />
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
                ))
            ) : (
                <p className="no-articles">No games yet</p>
            )}
        </>
    );
};
