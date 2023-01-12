import { useState } from 'react';

import styles from './EditTodo.module.css';

export const EditTodo = ({ editHandler, todo }) => {
    const [todoName, setTodoName] = useState(todo.name);

    const changeHandler = (e) => {
        setTodoName(e.target.value);
    };

    return (
        <form onSubmit={(e) => editHandler(e, todoName)} className={styles.form}>
            <div>
                <input
                    type="text"
                    value={todoName}
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
