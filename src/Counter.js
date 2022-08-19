import React, { useState, useEffect } from "react";

function Counter() {
  useEffect(() => {
    console.log("render");
  }, []);
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(Count + 1);
  };

  const decrement = () => {
    setCount(Count - 1);
  };
  return (
    <div>
      <span className="counter" onClick={decrement}>
        -
      </span>
      <span className="counter">{Count}</span>
      <span className="counter" onClick={increment}>
        +
      </span>
    </div>
  );
}

export default Counter;
