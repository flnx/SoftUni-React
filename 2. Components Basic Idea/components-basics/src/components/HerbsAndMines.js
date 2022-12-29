import { useState } from 'react';

export const HerbsAndMines = () => {
    const [state, setState] = useState({ herbs: 0, mines: 0 });

    const handleClick = (val) => {
        setState({
            ...state,
            [val]: state[val] + 1,
        });
    };

    const { herbs, mines } = state;

    return (
        <div className="flex">
            <p>I have found {herbs} herbs</p>
            <p>I have found {mines} mines</p>

            <div className="wrapper">
                <button onClick={handleClick.bind(null, 'herbs')}>
                    Get the Herb!
                </button>
                <button onClick={handleClick.bind(null, 'mines')}>
                    Mine it!
                </button>
            </div>
        </div>
    );
};