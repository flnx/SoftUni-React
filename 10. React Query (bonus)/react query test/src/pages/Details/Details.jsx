import { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { images } from '../../utils/images';
import { Comment } from './Comment';
import { Error } from '../../components/Error';
import { useGameDetails, useRemoveGame } from '../../hooks/useGames';

export const Details = () => {
    const { auth } = useContext(AuthContext);
    const { gameId } = useParams();
    const { isRemoving, removingError, removeGame } = useRemoveGame(gameId);
    const navigate = useNavigate();

    const { game, isGameLoading, gameError, comments, areCommentsLoading } =
        useGameDetails(gameId);

    const removeHandler = () => {
        const popUp = confirm('Are you sure you want to delete this game?');
        if (!popUp) return;

        removeGame(gameId, {
            onSuccess: () => {
                navigate('/');
            }
        });
    };

    if (isGameLoading) {
        return <h1 className="error">Loading....</h1>;
    }

    if (gameError || removingError) {
        return <Error error={gameError || removingError} />;
    }

    const isOwner = auth?._id === game?._ownerId;
    const btnDisabled = isRemoving ? 'disabled-btn' : '';

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
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {areCommentsLoading && <h1>Loading...</h1>}
                        {!areCommentsLoading && comments.length > 0 ? (
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
                        <Link to={`/catalog/${gameId}/edit`} className={`button ${btnDisabled}`}>
                            Edit
                        </Link>
                        <Link to="#" className={`button ${btnDisabled}`} onClick={removeHandler}>
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
};
