// custom hook for counter app

import { useState } from "react";

export default function useCounter(initialValue = 0) {
  // Defined the states

  const [count, setCount] = useState(initialValue);

  // the logic for the fun

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const Reset = () => setCount(initialValue);

  return { count, Increment, Decrement, Reset }; // exported this logic 
}
