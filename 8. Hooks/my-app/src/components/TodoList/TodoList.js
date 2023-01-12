import { useContext } from 'react';
import { TodosContext } from '../../contexts/todos';

import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export const TodoList = () => {
    const { todos } = useContext(TodosContext);

    return (
        <div className={styles['todos']}>
            <ul className={styles['todo-list']}>
                {todos.map((x) => (
                    <TodoItem key={x._id} {...x} />
                ))}
            </ul>
        </div>
    );
};
