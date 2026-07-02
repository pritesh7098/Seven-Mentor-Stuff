import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  // This things i need in my main app

  const { count, Increment, Decrement, Reset } = useCounter(0);

  return (
    <div>
      <h2>Count : {count} </h2>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
