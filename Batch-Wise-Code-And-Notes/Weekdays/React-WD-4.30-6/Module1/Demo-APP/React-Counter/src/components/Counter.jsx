import React, { useState } from "react";

function Counter() {
  // buisness logic

  const [count, setCount] = useState(0);

  // increase function

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    // UI Showcase

    <div>
      <h2>Count : {count}</h2>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
