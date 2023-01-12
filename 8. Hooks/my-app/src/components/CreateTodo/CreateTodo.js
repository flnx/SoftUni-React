import { useContext, useState } from 'react';

import { TodosContext } from '../../contexts/todos';
import styles from './CreateTodo.module.css';

export const CreateTodo = () => {
    const [task, setTask] = useState('');
    const { setTodos } = useContext(TodosContext);

    const changeHandler = (e) => {
        setTask(e.target.value);
    };

    const createHandler = (e, newTodo) => {
        e.preventDefault();

        setTodos((oldTodos) => [
            ...oldTodos,
            { _id: newTodo, name: newTodo, isCompleted: false },
        ]);

        setTask('');
    };

    return (
        <form onSubmit={(e) => createHandler(e, task)}>
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
