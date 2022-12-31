export const AddTodo = () => {
    return (
        <div className="add__todo">
            <input className="todo__search" type="text" name="text" placeholder="add todo" required />
            <button className="btn">Add</button>
        </div>
    );
};
