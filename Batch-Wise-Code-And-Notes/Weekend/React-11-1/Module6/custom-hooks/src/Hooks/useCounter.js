// step 1 : Defining the actual custom hook for counter
// which holds actual logic

import { useState } from "react";

export default function useCounter(initialValue = 0) {
  // actual logic

  const [count, setCount] = useState(initialValue); 

  // step 2 : Defining the buttons and it's logic

  const Increment = () => {
    setCount(count + 1);
  };

  // write decrement and reset logic

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(initialValue);
  };

  return { count, Increment, Decrement, Reset };
}
