import React, { useState } from "react";

function Counter() {
  // Buisness logic

  // let count = 10; // state

  // useState hook

  const [count, setCount] = useState(20);

  // Increment

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  // Decrement and reset

  // UI Showcase
  return (
    <div>
      <h2>Count : {count} </h2>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter; // export it so others can use it
