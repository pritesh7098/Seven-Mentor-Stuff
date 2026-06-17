import React, { useState } from "react";

function Counter() {
  // Buisness logic

  // initialize a counter variable

  let [count, setCount] = useState(0);

  console.log(count);

  // sepration of concerns 

const Increment = () => {
            setCount(count + 1);
          }




  // UI Showcase

  return (
      <div>
        <h2>Counter App - ReactJS</h2>
        <h3>Count: {count}</h3>

        <button
          onClick={Increment}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          decrease
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
  );
}

export default Counter;
