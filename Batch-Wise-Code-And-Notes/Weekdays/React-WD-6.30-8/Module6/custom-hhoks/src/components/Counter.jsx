import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(1);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button>
      <button onClick={reset}>reset </button>
    </div>
  );
}
