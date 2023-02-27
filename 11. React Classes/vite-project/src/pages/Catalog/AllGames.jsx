import { Component } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../utils/images';

export class AllGames extends Component {
    render() {
        return (
            <>
                {this.props.games?.length > 0 ? (
                    this.props.games?.map((game) => (
                        <div className="allGames" key={game._id}>
                            <div className="allGames-info">
                                <img src={images[game.imageUrl] || game.imageUrl} alt="image" />
                                <h6>Action</h6>
                                <h2>{game.title}</h2>
                                <Link to={`/catalog/${game._id}`} className="details-button">
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3 className="no-articles">No articles yet</h3>
                )}
            </>
        );
    }
}