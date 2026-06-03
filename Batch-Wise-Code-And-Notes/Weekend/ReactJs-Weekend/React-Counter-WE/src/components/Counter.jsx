import React from "react";
import { useState } from "react";

function Counter() {
  // buisness logic

  // state

  // let count = 0 ;

  let initialState = 0; 

  const [count, setCount] = useState(initialState); // useState hook to store the state and updater

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count + 1);
  const Reset = () => setCount(0);

  /* UI Showcase / UI Logic  */
  return (
    <div>
      <h1>React Counter</h1>
      <h2>Count : {count} </h2>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
