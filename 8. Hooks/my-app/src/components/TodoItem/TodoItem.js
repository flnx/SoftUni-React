import { useContext, useState } from 'react';
import { TodosContext } from '../../contexts/todos';

import { Trash, Pen } from 'phosphor-react';

import { EditTodo } from './Edit/EditTodo';
import { Checkbox } from './Checkbox/Checkbox';

import styles from './TodoItem.module.css';

export const TodoItem = ({ _id, isCompleted, name }) => {
    const { setTodos } = useContext(TodosContext);

    const [isChecked, setIsChecked] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const checkboxHandler = () => setIsChecked((prev) => !prev);
    const onEdit = () => setIsEdit((prev) => !prev);

    const editHandler = (e, newTaskName, taskId) => {
        e.preventDefault();

        setTodos((currentTodos) =>
            currentTodos.map((x) =>
                x._id === taskId ? { ...x, name: newTaskName } : x
            )
        );

        setIsEdit(false);
    };

    const deleteHandler = (todoId) => {
        setTodos((oldTodos) => oldTodos.filter((x) => x._id !== todoId));
    };

    return (
        <li className={styles['item']}>
            <div className={styles['wrapper']}>
                {isEdit ? (
                    <EditTodo
                        editHandler={editHandler}
                        taskName={name}
                        taskId={_id}
                    />
                ) : (
                    <section>
                        <Checkbox
                            changeHandler={checkboxHandler}
                            isChecked={isChecked}
                        />
                        <span className={isChecked ? styles.completed : ''}>
                            {name}
                        </span>
                    </section>
                )}

                <section>
                    <Pen
                        size={32}
                        className={styles['edit-icon']}
                        onClick={() => onEdit(_id)}
                    />
                    <Trash
                        size={32}
                        className={styles['trash-icon']}
                        onClick={() => deleteHandler(_id)}
                    />
                </section>
            </div>
        </li>
    );
};
