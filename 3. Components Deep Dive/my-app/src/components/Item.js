import styles from './Item.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { Checkbox } from './Checkbox';

export const Item = (props) => {
    let shoppingItem = props.isCompleted ? styles.completed : styles.name;

    return (
        <div className={styles.item}>
            <div className={styles['left-side']}>
                <Checkbox {...props} />
                <span className={shoppingItem}>{props.product}</span>
            </div>

            <IconContext.Provider value={{ className: 'shared-class', size: 28 }}>
                <RiDeleteBin6Line
                    className={styles.delete}
                    onClick={() => props.onDelete(props._id)}
                />
            </IconContext.Provider>
        </div>
    );
};
