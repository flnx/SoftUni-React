import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GamesContext } from '../../context/GamesContext';
import { handleEmptyFields, submitHandler } from '../../utils/utils';
import * as gameService from '../../service/data';
import { AuthContext } from '../../context/AuthContext';

export const Edit = () => {
    const [error, setError] = useState(false);
    const { findGameById, updateGame } = useContext(GamesContext);
    const { auth } = useContext(AuthContext);

    const { gameId } = useParams();
    const navigate = useNavigate();
    const game = findGameById(gameId);

    const onSubmit = (inputData) => {
        const data = { ...inputData };

        const hasEmptyFields = handleEmptyFields(data);

        if (hasEmptyFields) {
            return setError("Fields can't be empty!");
        }

        gameService
            .update(data, auth.accessToken, gameId)
            .then((updatedGameData) => {
                updateGame(updatedGameData);
                navigate(`/catalog/${updatedGameData._id}`);
            })
            .catch((err) => setError(err.message || err));
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler(onSubmit)}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title: </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={game.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        defaultValue={game.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        defaultValue={game.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={game.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        defaultValue={game.summary}
                    />
                    {error && <h2 className="error">{error}</h2>}
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
};
