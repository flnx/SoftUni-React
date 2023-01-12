import { useState } from "react";

export const EditTodo = ({ editHandler, taskName, taskId }) => {
    const [task, setTask] = useState(taskName);

    const changeHandler = (e) => {
        setTask(e.target.value);
    };

    return (
        <div>
            <form onSubmit={(e) => editHandler(e, task, taskId)}>
                <input type="text" value={task} onChange={changeHandler} />
                <input type="submit" value="save" />
            </form>
        </div>
    );
};
