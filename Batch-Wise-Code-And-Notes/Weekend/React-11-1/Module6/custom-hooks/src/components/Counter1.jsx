// step 3 : Multiple comp now can use the logic of count, inc, dec and reset

import useCounter from "../Hooks/useCounter";


export default function Counter1() {
  // Logic 

  const { count, Increment, Decrement, Reset } = useCounter(0); // this comes from custom hook that we made earlier

  return (
    <div>
      <h1>This is counter 1 </h1>
      <h2>Current Count : {count}</h2>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>SetZero</button>
    </div>
  );
}
