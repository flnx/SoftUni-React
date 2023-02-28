import { Component } from 'react';
import { Navigate } from 'react-router-dom';

import * as gameService from '../../service/data';
import { handleEmptyFields, submitHandler } from '../../utils/utils';

// Context
import { GamesContext } from '../../context/GamesContext';
import { AuthContext } from '../../context/AuthContext';

export class Create extends Component {
    render() {
        return (
            <GamesContext.Consumer>
                {({ addGame }) => (
                    <AuthContext.Consumer>
                        {({ auth }) => (
                            <CreateContent addGame={addGame} auth={auth} />
                        )}
                    </AuthContext.Consumer>
                )}
            </GamesContext.Consumer>
        );
    }
}

class CreateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(inputData) {
        const { auth, addGame } = this.props;
        const data = { ...inputData };

        const hasEmptyFields = handleEmptyFields(data);

        if (hasEmptyFields) {
            return this.setState({
                error: "Fields can't be empty!",
            });
        }

        gameService
            .create(data, auth.accessToken)
            .then((gameData) => {
                addGame(gameData);
            })
            .catch((err) => {
                this.setState({ error: err.message || err });
            });
    }

    render() {
        const { error } = this.state;

        return (
            <section id="create-page" className="auth">
                <form id="create" onSubmit={submitHandler(this.onSubmit)}>
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
                        <textarea
                            name="summary"
                            id="summary"
                            defaultValue={''}
                        />
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
    }
}
