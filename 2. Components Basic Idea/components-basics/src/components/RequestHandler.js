import { useState } from 'react';

export function RequestHandler() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(p => p + 1);
        await delay(3000);
        setPending(p => p - 1);
        setCompleted(c => c + 1);
    }

    // Press buy - increase pending counter
    // after 3 seconds pending counter should decrease and completed counter should increase

    return (
        <div className="flex">
            <h3>Pending: {pending}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </div>
    );

    function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}
