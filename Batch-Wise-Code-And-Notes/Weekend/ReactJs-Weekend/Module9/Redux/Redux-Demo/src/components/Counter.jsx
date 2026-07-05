import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Store/counterSlice";

function Counter() {
  // logic

  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();

  // UI Part

  return (
    <div>
      <h2>Count : {count} </h2>

      <button onClick={() => dispatch(increment())}>Increase</button>

      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <button onClick={() => dispatch(reset())}>SetZero</button>
    </div>
  );
}

export default Counter;
