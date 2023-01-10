import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export const TodoList = () => {
    return (
        <div className={styles.todos}>
            <ul className={styles['todo-list']}>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    );
};