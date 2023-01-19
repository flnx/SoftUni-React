import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Comment } from './Comment';

import { Link } from 'react-router-dom';

import * as api from '../../service/data';
import { images } from '../../utils/images';

export const Details = () => {
    const [game, setGame] = useState(null);
    const [comments, setComments] = useState(null);
    const [error, setError] = useState(null);
    const { auth } = useContext(AuthContext);

    const { gameId } = useParams();

    useEffect(() => {
        const promises = [api.getById(gameId), api.getCommentsById(gameId)];

        Promise.all(promises)
            .then(([gameData, commentsData]) => {
                setGame(gameData);
                setComments(commentsData);
            })
            .catch((err) => setError(err.message || err));
    }, [gameId]);

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
                    <img className="game-img" src={images[game.imageUrl]} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.length > 0 ? (
                            comments.map((x) => <Comment text={x.content} key={x._id}/>)
                        ) : (
                            <p className="no-comment">No comments.</p>
                        )}
                    </ul>
                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${gameId}/edit`} className="button">
                            Edit
                        </Link>
                        <Link to="#" className="button">
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
