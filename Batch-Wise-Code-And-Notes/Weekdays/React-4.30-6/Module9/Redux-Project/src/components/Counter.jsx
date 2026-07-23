import React from "react";

// step 4 : consuming redux logic inside the component

import { increment, decrement, reset } from "../store/counterSlice";

import { useSelector, useDispatch } from "react-redux";

//Third party lib also have their own hook we can use in our codebases.

function Counter() {
  // Buisness logic

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  /* ---------------------- */

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
