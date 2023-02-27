import { Component } from 'react';
import { LoadingTemplate } from '../../components/Loading';
import { GamesContext } from '../../context/GamesContext';
import { AllGames } from './AllGames';
import { Error } from '../../components/Error';

export class Catalog extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = GamesContext;

    render() {
        const { games, error, isPending } = this.context;

        return (
            <section id="catalog-page">
                <h1>All Games</h1>
                {isPending ? (
                    <LoadingTemplate />
                ) : error ? (
                    <Error error={error} />
                ) : (
                    <AllGames games={games} />
                )}
            </section>
        );
    }
}
