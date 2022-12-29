import { useState } from 'react';

export const Age = () => {
    const [age, setAge] = useState(19);
    const [siblingsNum, setSiblingsNum] = useState(10);

    const handleAge = () => setAge(age + 1);
    const handleSiblingsNum = () => setSiblingsNum(siblingsNum + 1);

    return (
        <div className="flex">
            <p>Today I am {age} Years of Age</p>
            <p>I have {siblingsNum} siblings</p>

            <div className="wrapper">
                <button onClick={handleAge}>Get older!</button>
                <button onClick={handleSiblingsNum}>More siblings!</button>
            </div>
        </div>
    );
};