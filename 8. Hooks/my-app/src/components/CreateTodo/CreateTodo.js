import { useState } from 'react';
import styles from './CreateTodo.module.css';

export const CreateTodo = ({ createHandler }) => {
    const [task, setTask] = useState('');

    const changeHandler = (e) => {
        setTask(() => e.target.value);
    };
    return (
        <form action="" onSubmit={(e) => createHandler(e, task)}>
            <div className={styles['form-control']}>
                <input
                    type="text"
                    name="todo"
                    value={task}
                    className={styles['add-todo']}
                    onChange={changeHandler}
                    placeholder="Add Todo..."
                />
                <input type="submit" value="Add Todo" className={styles.btn} />
            </div>
        </form>
    );
};
