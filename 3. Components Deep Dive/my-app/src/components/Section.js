import { Item } from './Item';
import { useState } from 'react';
import { useEffect } from 'react';
import * as api from '../api/api';
import styles from './Section.module.css';

export const Section = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        api.get().then((data) => setTodos(Object.values(data)));
    }, []);

    const handleDelete = (todoId) => {
        api.delete(todoId);
        setTodos((todoList) => todoList.filter((x) => x._id !== todoId));
    };

    const handleChange = (todo) => {
        setTodos((todoList) =>
            todoList.map((x) =>
                x._id === todo._id ? { ...x, isCompleted: !todo.isCompleted } : x
            )
        );

        api.put(todo._id, { ...todo, isCompleted: !todo.isCompleted });
    };

    return (
        <section className={styles.content}>
            {todos.length === 0 ? (
                <li>Loading...</li>
            ) : (
                todos.map((item) => (
                    <Item
                        key={item._id}
                        {...item}
                        onChange={handleChange}
                        onDelete={handleDelete}
                    />
                ))
            )}
        </section>
    );
};
