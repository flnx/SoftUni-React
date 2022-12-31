import styles from './Checkbox.module.css';

export const Checkbox = ({ isCompleted, onChange, _id, product }) => {

    return (
        <div className={styles['checkbox']}>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => onChange({_id, product, isCompleted})}
            />
        </div>
    );
};
