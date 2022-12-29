import { useState } from 'react';

export const Timer = (props) => {
    let [time, setTime] = useState(props.start);

    setTimeout(() => {
        if (time < 100) {
            setTime(time + 1);
        }
    }, 1000);

    return (
        <div className="flex">
            <h2>Timer: {time} sec.</h2>
        </div>
    );
};
