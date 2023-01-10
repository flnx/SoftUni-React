import { Trash } from 'phosphor-react';
import { Checkbox } from './Checkbox';

import styles from './TodoItem.module.css';

export const TodoItem = () => {
    return (
        <li className={styles['todo-item']}>
            <div className={styles['todo-item__wrapper']}>
                <Checkbox />
                <span>Clean my room</span>
                <Trash size={32} className={styles['trash-icon']} />
            </div>
        </li>
    );
};
