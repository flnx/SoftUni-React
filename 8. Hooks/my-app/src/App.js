import { useState, useEffect } from 'react';

import { TodoList } from './components/TodoList/TodoList';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import { TodosContext } from './contexts/todos';

import './styles/App.css';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos/')
            .then((res) => res.json())
            .then((data) => setTodos(Object.values(data)));
    }, []);

    const createHandler = (newTodoName) => {
        fetch(`http://localhost:3030/jsonstore/todos/`, {
            method: 'POST',
            body: JSON.stringify({ name: newTodoName, isCompleted: false }),
        })
            .then((res) => res.json())
            .then((newTodoData) => {
                setTodos((state) => [...state, newTodoData]);
            });
    };

    const editHandler = (todo, editedTodoName) => {
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...todo, name: editedTodoName }),
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos((state) =>
                    state.map((x) => (x._id === todo._id ? data : x))
                );
            });
    };

    const deleteHandler = async (todoId) => {
        await fetch(`http://localhost:3030/jsonstore/todos/${todoId}`, {
            method: 'DELETE',
        });

        setTodos((oldTodos) => oldTodos.filter((x) => x._id !== todoId));
    };

    const checkBoxHandler = (todo) => {
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos((state) =>
                    state.map((x) => (x._id === todo._id ? data : x))
                );
            });
    };

    return (
        <TodosContext.Provider
            value={{
                todos,
                editHandler,
                deleteHandler,
                createHandler,
                checkBoxHandler,
            }}
        >
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
        </TodosContext.Provider>
    );
}
export default App;
