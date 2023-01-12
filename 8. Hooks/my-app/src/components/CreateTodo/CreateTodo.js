import { useContext, useState } from 'react';

import { TodosContext } from '../../contexts/todos';
import styles from './CreateTodo.module.css';

export const CreateTodo = () => {
    const [task, setTask] = useState('');
    const { createHandler } = useContext(TodosContext);

    const changeHandler = (e) => {
        setTask(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        createHandler(task);
        setTask('');
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
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
