import styles from './Checkbox.module.css';

export const Checkbox = ({ changeHandler, isChecked }) => {
    return (
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={changeHandler}
            />
            <svg
                className={`
                    ${styles.checkbox} 
                    ${isChecked ? styles['checkbox-active'] : ''}`}
                // Decorative element - hidden from screen readers
                aria-hidden="true"
                fill="none"
                viewBox="0 0 15 10"
            >
                <path
                    d="M1 4.5L5 9L14 1"
                    strokeWidth="2.2"
                    stroke={isChecked ? '#fff' : 'none'}
                />
            </svg>
        </label>
    );
};
