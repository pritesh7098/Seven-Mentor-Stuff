import React, { useState } from "react";
import { useCounter } from "./Hooks/useCounter";

function App() {
  const { count, Increment, Decrement, Reset } = useCounter(); // DESTRUCTING THE OBJECT ITSELF

  return (
    <div>
      <h1>Counter in react</h1>
      <h2>Count : {count} </h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
