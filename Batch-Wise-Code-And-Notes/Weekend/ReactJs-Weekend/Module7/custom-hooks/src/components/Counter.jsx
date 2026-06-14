import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
// main app

function Counter() {
  const { count, Increment, Decrement, Reset } = useCounter();

  return (
    <div>
      <h1>Counter using custom hooks</h1>
      <h2>Count : {count} </h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement </button>
      <button onClick={Reset}>reset</button>
    </div>
  );
}

export default Counter;
