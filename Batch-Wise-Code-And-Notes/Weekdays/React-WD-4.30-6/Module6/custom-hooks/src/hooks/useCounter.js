// custom hook logic

import { useState } from "react";

// step 1

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const Reset = () => setCount(initialValue);

  // step 2

  return { count, Increment, Decrement, Reset };
}
