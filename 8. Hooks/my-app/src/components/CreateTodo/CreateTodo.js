import styles from './CreateTodo.module.css';

export const CreateTodo = () => {
    return (
        <form>
            <div className={styles['form-control']}>
                <input
                    type="text"
                    className={styles['add-todo']}
                    placeholder="Add Todo..."
                />
                <input 
                    type="button" 
                    value="Add Todo" 
                    className={styles.btn} 
                />
            </div>
        </form>
    );
};
