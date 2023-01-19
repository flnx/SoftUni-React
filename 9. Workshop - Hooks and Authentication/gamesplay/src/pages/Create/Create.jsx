import { useContext, useState } from 'react';
import { GamesContext } from '../../context/GamesContext';
import { submitHandler } from '../../utils/utils';
import * as gameService from '../../service/data';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [error, setError] = useState(false);
    const { addGame } = useContext(GamesContext);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (inputData) => {
        const data = { ...inputData };

        const hasEmptyFields = Object.values(data).some((x) => x == '');

        if (hasEmptyFields) {
            return setError("Fields can't be empty!");
        }

        gameService
            .create(data, auth.accessToken)
            .then((gameData) => {
                addGame(gameData);
                navigate(`/catalog/${gameData._id}`);
            })
            .catch((err) => setError(err.message || err));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler(onSubmit)}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={''} />
                    <h2 className="error">{error}</h2>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Game"
                    />
                </div>
            </form>
        </section>
    );
};
