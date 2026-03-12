import React, { useState } from "react";

function Counter() {
  // main logic for counter app

  const [count, setCount] = useState(0);

  // actual logic

  const increment = () => {
    setCount(count + 1);
  };

  const decerement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // UI
  return (
    <>
      <div>Hello</div>
      <h1>Counter APP</h1>
      <p>Count : {count} </p>
      <button onClick={increment}>Increase</button>
      <button onClick={decerement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
