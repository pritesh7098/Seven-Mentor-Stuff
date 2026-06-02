// creating simple js function / custom hook

import { useState } from "react";

export function useCounter(initialState = 0) {
  // state defination

  const [count, setCount] = useState(initialState);

  // business logic

  const Increment = ()=> setCount(count+1)
  const Decrement = ()=> setCount(count-1)
  const Reset = ()=> setCount(0)

  // exporting our logic

  return { count, Increment, Decrement, Reset }; 
}