import './App.css';
import { AddTodo } from './components/AddTodo';
import { Header } from './components/Header';
import { Section } from './components/Section';

function App() {
    return (
        <div className="container">
            <div className="todo">
                <Header />
                <Section />
            </div>
                <AddTodo />
        </div>
    );
}

export default App;
