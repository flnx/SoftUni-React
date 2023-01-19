import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import * as api from '../../service/data';

import { images } from '../../utils/images';

export const Details = () => {
    const [game, setGame] = useState(null);
    const [comments, setComments] = useState(null);
    const [error, setError] = useState(null);

    const { gameId } = useParams();
    const { auth } = useContext(AuthContext);

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
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    <p className="no-comment">No comments.</p>
                </div>
                <div className="buttons">
                    {isOwner && (
                        <>
                            <a href="#" className="button">
                                Edit
                            </a>
                            <a href="#" className="button">
                                Delete
                            </a>
                        </>
                    )}
                </div>
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
