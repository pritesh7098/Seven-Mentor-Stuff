/* import React from 'react'
import Parent from './components/Parent'

function App() {
  return (
    <div>

<h2>Counter APP with props drilling </h2>
< Parent /> 

    </div>
  )
}

export default App */


import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

 function increaseCount() {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}

export default Counter;