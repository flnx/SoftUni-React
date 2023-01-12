import { useState } from 'react';

import styles from './EditTodo.module.css';

export const EditTodo = ({ editHandler, taskName, taskId }) => {
    const [task, setTask] = useState(taskName);

    const changeHandler = (e) => {
        setTask(e.target.value);
    };

    return (
        <form
            onSubmit={(e) => editHandler(e, task, taskId)}
            className={styles.form}
        >
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={changeHandler}
                    className={styles['edit-item']}
                />
            </div>

            <div>
                <button
                    type="submit"
                    value="save"
                    className={styles['edit-btn']}
                >
                    Save
                </button>
            </div>
        </form>
    );
};
