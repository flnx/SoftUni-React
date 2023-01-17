import { useContext } from 'react';
import { LoadingTemplate } from '../../components/Loading';
import { GamesContext } from '../../context/GamesContext';
import { AllGames } from './AllGames';

export const Catalog = () => {
    const { games, error, isPending } = useContext(GamesContext);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {isPending ? 
                <LoadingTemplate />
              : error ? 
                <Error error={error} />
              : 
                <AllGames games={games}/>
             }            
        </section>
    );
};
