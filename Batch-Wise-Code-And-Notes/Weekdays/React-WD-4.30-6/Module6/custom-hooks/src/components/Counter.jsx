import { useCounter } from "../hooks/useCounter";

function Counter() {
  // logic

  const { count, Increment, Decrement, Reset } = useCounter(0);

  return (
    <div>

      <h2>Count : {count}</h2>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
