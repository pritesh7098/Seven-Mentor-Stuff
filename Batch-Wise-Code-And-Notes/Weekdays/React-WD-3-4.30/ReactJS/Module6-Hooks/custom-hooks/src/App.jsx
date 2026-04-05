import { useCounter } from "./hooks/useCounter";
import React from "react";


function App() {
  // logic

  const { count, Increment, Decrement, Reset } = useCounter(0);

  return (
    <div>
      <h1>Custom Hooks Practice With Counter APP </h1>
      <p>Count: {count}</p>
      <button onClick={Increment}>increase</button>
      <button onClick={Decrement}>decrease</button>
      <button onClick={Reset}>reset</button>
    </div>
  );
}

export default App;
