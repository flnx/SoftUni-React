import { TodoList } from './components/TodoList/TodoList';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import { TodosContext } from './contexts/todos';
import { useFetch } from './hooks/useFetch';
import { useTodosApi } from './hooks/useTodos';

import './styles/App.css';

function App() {
    const [todos, setTodos, isLoading] = useFetch(
        'http://localhost:3030/jsonstore/todos/'
    );

    const { removeTodo, createTodo, updateTodo } = useTodosApi();

    const createHandler = async (newTodo) => {
        const data = await createTodo(newTodo);
        setTodos((state) => [...state, data]);
    };

    const editHandler = async (todo, editedTodoName) => {
        const data = await updateTodo(todo, editedTodoName);

        setTodos((state) => state.map((x) => (x._id === todo._id ? data : x)));
    };

    const deleteHandler = async (todoId) => {
        await removeTodo(todoId);

        setTodos((oldTodos) => oldTodos.filter((x) => x._id !== todoId));
    };

    const checkBoxHandler = async (todo) => {
        const data = await updateTodo(todo, false, todo.isCompleted);

        setTodos((state) => state.map((x) => (x._id === todo._id ? data : x)));
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
                        {isLoading ? <h2>Loading...</h2> : <TodoList />}
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
