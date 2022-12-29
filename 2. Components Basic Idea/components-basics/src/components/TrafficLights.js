import { useState } from 'react';

export function TrafficLight() {
    const [walk, setWalk] = useState(true);
    
    function handleClick() {
        setWalk(!walk);
    }
  
    return (
      <div className="flex">
        <button onClick={handleClick}>
          Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
          color: walk ? 'darkgreen' : 'darkred'
        }}>
          {walk ? 'Walk' : 'Stop'}
        </h1>
      </div>
    );
  }  