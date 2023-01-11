import { useState, useEffect } from 'react';

import { TodoList } from './components/TodoList/TodoList';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import { TodosContext } from './contexts/todos';

import './styles/App.css';

const allTodos = [
    { _id: 1, name: 'Clean the House', isCompleted: false },
    { _id: 2, name: 'Shopping', isCompleted: false },
    { _id: 3, name: 'Workout', isCompleted: false },
    { _id: 5, name: 'Journal', isCompleted: false },
    { _id: 6, name: 'Call Jimmy', isCompleted: false },
];

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(() => allTodos);
    }, []);

    return (
        <div className="App">
            <div className="container">
                <header>
                    <h1>TODO List</h1>
                </header>
                <TodosContext.Provider value={{ todos, setTodos }}>
                    <main>
                        <TodoList />
                    </main>
                    <section>
                        <CreateTodo />
                    </section>
                </TodosContext.Provider>
            </div>
        </div>
    );
}

export default App;
