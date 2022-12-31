import * as api from '../api/api';

export const AddTodo = () => {
    const handleNewItem = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const product = formData.get('text');

        const data = {
            isCompleted: false,
            product
        }

        await api.post('/', data);
        e.target.reset();
    };

    return (
        <div>
            <form action="" className="add__todo" onSubmit={handleNewItem}>
                <input
                    className="todo__search"
                    type="text"
                    name="text"
                    placeholder="add todo"
                    required
                />
                <button className="btn">Add</button>
            </form>
        </div>
    );
};
