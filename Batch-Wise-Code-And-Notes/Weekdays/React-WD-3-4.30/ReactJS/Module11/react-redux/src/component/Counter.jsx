import React, { useContext, useState } from "react";

import { increment, decrement, reset } from "../store/counterSlice"; // importing the logic

import { useDispatch, useSelector } from "react-redux";

// importing hooks from redux

function Counter() {
  // const[count,setCount] = useState(0)

  const count = useSelector((state) => state.counter.value); // 0

  const dispatch = useDispatch(); // using useDispatch for action

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
