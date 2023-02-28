import { Component } from 'react';
import { Link } from 'react-router-dom';

import { GamesContext } from '../../context/GamesContext';
import { AuthContext } from '../../context/AuthContext';

import { images } from '../../utils/images';

import { Comment } from './Comment';
import { withRouter } from '../../HOC/withRouter';

import * as api from '../../service/data';

class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AuthContext.Consumer>
                {({ auth }) => (
                    <GamesContext.Consumer>
                        {({ deleteGame }) => (
                            <DetailsContent
                                auth={auth}
                                deleteGame={deleteGame}
                                params={this.props.params}
                                navigate={this.props.navigate}
                            />
                        )}
                    </GamesContext.Consumer>
                )}
            </AuthContext.Consumer>
        );
    }
}

class DetailsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            comments: null,
            error: false,
        };

        this.deleteHandler = this.deleteHandler.bind(this);
    }

    componentDidMount() {
        const { gameId } = this.props.params;

        const promises = [api.getById(gameId), api.getCommentsById(gameId)];

        Promise.all(promises)
            .then(([gameData, commentsData]) => {
                this.setState({
                    game: gameData,
                    comments: commentsData,
                });
            })
            .catch((err) => this.setState({ error: err.message || err }));
    }

    deleteHandler() {
        const { gameId } = this.props.params;

        const popUp = confirm('Are you sure you want to delete this game?');

        if (!popUp) {
            return;
        }

        api.remove(this.props.auth.accessToken, gameId)
            .then(() => {
                this.props.deleteGame(gameId);
                this.props.navigate('/catalog', { replace: true });
            })
            .catch((err) => this.setState({ error: err.message || er }));
    }

    render() {
        const game = this.state.game;
        const comments = this.state.comments;
        const error = this.state.error;
        const auth = this.props.auth;
        const { gameId } = this.props.params;

        if (error) {
            return <h1 className="error">{error}</h1>;
        }

        if (!game) {
            return <h1 className="error">Loading....</h1>;
        }

        const isOwner = auth?._id === game?._ownerId;
        return (
            <section id="game-details">
                <h1>Game Details</h1>
                <div className="info-section">
                    <div className="game-header">
                        <img
                            className="game-img"
                            src={images[game.imageUrl] || game.imageUrl}
                        />
                        <h1>{game.title}</h1>
                        <span className="levels">
                            MaxLevel: {game.maxLevel}
                        </span>
                        <p className="type">{game.category}</p>
                    </div>
                    <p className="text">{game.summary}</p>
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {comments.length > 0 ? (
                                comments.map((x) => (
                                    <Comment text={x.content} key={x._id} />
                                ))
                            ) : (
                                <p className="no-comment">No comments.</p>
                            )}
                        </ul>
                    </div>
                    {isOwner && (
                        <div className="buttons">
                            <Link
                                to={`/catalog/${gameId}/edit`}
                                className="button"
                            >
                                Edit
                            </Link>
                            <Link
                                to="#"
                                className="button"
                                onClick={this.deleteHandler}
                            >
                                Delete
                            </Link>
                        </div>
                    )}
                </div>
                {auth?.email && !isOwner && (
                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form">
                            <textarea
                                name="comment"
                                placeholder="Comment......"
                                defaultValue={''}
                            />
                            <input
                                className="btn submit"
                                type="submit"
                                defaultValue="Add Comment"
                            />
                        </form>
                    </article>
                )}
            </section>
        );
    }
}

export default withRouter(Details);
