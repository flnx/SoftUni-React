import { useEffect, useState } from 'react';

import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const allTodos = [
    { _id: 1, name: 'Clean the House', isCompleted: false },
    { _id: 2, name: 'Shopping', isCompleted: false },
    { _id: 3, name: 'Workout', isCompleted: false },
    { _id: 5, name: 'Journal', isCompleted: false },
    { _id: 6, name: 'Call Jimmy', isCompleted: false },
];

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(() => allTodos);
    }, []);

    const deleteHandler = (todoId) => {
        setTodos((oldTodos) => oldTodos.filter((x) => x._id !== todoId));
    };

    return (
        <div className={styles.todos}>
            <ul className={styles['todo-list']}>
                {todos.map((x) => (
                    <TodoItem key={x._id} {...x} deleteHandler={deleteHandler} />
                ))}
            </ul>
        </div>
    );
};
