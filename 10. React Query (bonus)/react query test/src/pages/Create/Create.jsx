import { useState } from 'react';
import { handleEmptyFields, submitHandler } from '../../utils/utils';
import { useAddNewGame } from '../../hooks/useGames';
import { Error } from '../../components/Error';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [error, setError] = useState(false);
    const { gameError, createPost, isLoading } = useAddNewGame();
    const navigate = useNavigate();

    const onSubmit = async (inputData) => {
        const data = { ...inputData };
        const hasEmptyFields = handleEmptyFields(data);

        if (hasEmptyFields) {
            return setError("Fields can't be empty!");
        }

        createPost(data, {
            onSuccess: (newGame) => {
                navigate(`/catalog/${newGame._id}`)
            }
        });
    };

    if (gameError) {
        return <Error error={gameError} />;
    }

    const btnDisabled = isLoading ? 'disabled-btn' : '';

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler(onSubmit)}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={''} />
                    <h2 className="error">{error}</h2>
                    <input
                        disabled={isLoading}
                        className={`btn submit ${btnDisabled}`}
                        type="submit"
                        value={isLoading ? 'Loading...' : 'Create Game'}
                    />
                </div>
            </form>
        </section>
    );
};
