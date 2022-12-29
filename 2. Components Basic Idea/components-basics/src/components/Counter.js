import { useState } from 'react';

export const Counter = () => {
    const [counter, setCount] = useState(0);

    const increaseHandler = () => setCount((prevCount) => prevCount + 1);
    const resetHandler = () => setCount(0);
    const decreaseHandler = () => setCount((prevCount) => prevCount - 1);

    return (
        <div className="flex">
            <h1>{counter}</h1>
            <div className="wrapper">
                <button onClick={decreaseHandler}>-</button>
                <button onClick={resetHandler}>Reset</button>
                <button onClick={increaseHandler}>+</button>
            </div>
        </div>
    );
};

