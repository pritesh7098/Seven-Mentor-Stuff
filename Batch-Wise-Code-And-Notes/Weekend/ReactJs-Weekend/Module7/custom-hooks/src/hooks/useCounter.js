// js file which having actual logic of our counter app

import { useState } from "react";

export default function useCounter(initialValue = 0) {
  // state logic

  const [count, setCount] = useState(initialValue);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const Reset = () => setCount(0);

  return { count,Increment,Decrement,Reset };
}
