import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter APP </h1>

      <h2>Count:{count}</h2>

      <br />

      <button onClick={() => dispatch(increment())}>Increse</button>
      <button onClick={() => dispatch(decrement())}>Decrese</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
