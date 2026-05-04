import React, { useState } from "react";
import Counter from "./components/Counter"

function App() {
  return (
    <div>
      <h1>Custom hooks in react</h1>
      <Counter />
    </div>
  );
}

export default App;



import React, { useState } from "react";

// Buisness logic

// step 1 - creating custom hook to store state logic

// hooks/useCounter.js

function useCounter(initialValue = 0) {
  // assign a state with default para

  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}

function Counter() {
  // Buisness logic

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


function App() {
  // UI

  return (
    <div>
      <h1>Custom hooks in react</h1>
      <Counter />
    </div>
  );
}
