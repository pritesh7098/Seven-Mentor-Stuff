// custom hook

import React, { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(initialValue);
  }

  // return this logic

  return { count, Increment, Decrement, Reset };
}
