import { Component } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../utils/images';

export class LatestGames extends Component {
    render() {
        return (
            <>
                {this.props.games.length > 0 ? (
                    this.props.games.map((game) => (
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
    }
}