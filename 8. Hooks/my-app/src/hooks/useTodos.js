const URL = 'http://localhost:3030/jsonstore/todos/';

export function useTodosApi() {
    async function removeTodo(todoId) {
        const res = await fetch(`${URL}/${todoId}`, {
            method: 'DELETE',
        });

        return res.json();
    }

    async function createTodo(todo) {
        const res = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ name: todo, isCompleted: false }),
        });

        return res.json();
    }

    async function updateTodo(todo, editedName) {
        const data = editedName
            ? { ...todo, name: editedName }
            : { ...todo, isCompleted: !todo.isCompleted };

        const res = await fetch(`${URL}/${todo._id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });

        return res.json();
    }

    return {
        removeTodo,
        createTodo,
        updateTodo,
    };
}
