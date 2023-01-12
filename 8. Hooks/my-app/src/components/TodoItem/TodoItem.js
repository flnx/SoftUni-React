import { useContext, useEffect, useState } from 'react';
import { TodosContext } from '../../contexts/todos';

import { Trash, Pen } from 'phosphor-react';

import { EditTodo } from './Edit/EditTodo';
import { Checkbox } from './Checkbox/Checkbox';

import styles from './TodoItem.module.css';

export const TodoItem = ({ todo }) => {
    const [isEdit, setIsEdit] = useState(false);

    const { editHandler, deleteHandler, checkBoxHandler } =
        useContext(TodosContext);

    const onEdit = () => setIsEdit((prev) => !prev);

    const onCheck = () => {
        checkBoxHandler(todo);
    };

    const handleEdit = (e, newTodoName) => {
        e.preventDefault();

        editHandler(todo, newTodoName);
        setIsEdit(false);
    };

    useEffect(() => {
        // console.log('mount');
        return () => {
            // console.log('unmount');
        };
    }, []);

    return (
        <li className={styles['item']}>
            <div className={styles['wrapper']}>
                {isEdit ? (
                    <section>
                        <EditTodo editHandler={handleEdit} todo={todo} />
                    </section>
                ) : (
                    <section>
                        <Checkbox
                            changeHandler={onCheck}
                            isChecked={todo.isCompleted}
                        />
                        <span
                            className={todo.isCompleted ? styles.completed : ''}
                        >
                            {todo.name}
                        </span>
                    </section>
                )}

                <section>
                    <Pen
                        size={32}
                        className={styles['edit-icon']}
                        onClick={onEdit}
                    />
                    <Trash
                        size={32}
                        className={styles['trash-icon']}
                        onClick={() => deleteHandler(todo._id)}
                    />
                </section>
            </div>
        </li>
    );
};
