import { useState } from 'react';

import { Trash } from 'phosphor-react';
import { Checkbox } from './Checkbox';

import styles from './TodoItem.module.css';

export const TodoItem = () => {
    const [isChecked, setIsChecked] = useState(false);

    const changeHandler = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <li className={styles['todo-item']}>
            <div className={styles['todo-item__wrapper']}>
                <section>
                    <Checkbox
                        changeHandler={changeHandler}
                        isChecked={isChecked}
                    />
                    <span className={isChecked ? styles.completed : ""}>Clean my room</span>
                </section>
                <Trash size={32} className={styles['trash-icon']} />
            </div>
        </li>
    );
};
