import './App.css';
import { Counter } from './components/Counter';
import { Age } from './components/Age';
import { Form } from './components/Form';
import { HerbsAndMines } from './components/HerbsAndMines';
import { TrafficLight } from './components/TrafficLights';
import { RequestHandler } from './components/RequestHandler';
import { PackingList } from './components/PackingList';
import { PackingList2 } from './components/PackingList2';
import { DrinkList } from './components/Drinks';
import { Timer } from './components/Timer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Timer start={1} />
                <DrinkList />
                <PackingList2 />
                <PackingList />
                <RequestHandler />
                <Counter />
                <Age />
                <Form />
                <HerbsAndMines />
                <TrafficLight />
            </header>
        </div>
    );
}

export default App;
