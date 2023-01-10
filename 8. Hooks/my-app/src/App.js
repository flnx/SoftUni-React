import { TodoList } from './components/TodoList/TodoList';
import { CreateTodo } from './components/CreateTodo/CreateTodo';

import './styles/App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <header>
                    <h1>TODO List</h1>
                </header>
                <main>
                    <TodoList />
                </main>
                <section>
                    <CreateTodo />
                </section>
            </div>
        </div>
    );
}

export default App;
