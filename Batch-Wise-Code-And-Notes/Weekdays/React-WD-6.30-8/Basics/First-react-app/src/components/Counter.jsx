import React, { useState } from "react";

function Counter() {
  // buisness logic

  const [count, setCount] = useState(10); // react way
  // const count = 10; // js way

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const Reset = () => setCount(0);

  return (
    <div>
      {/* UI Part / UI Showcase  */}

      <h1>Count : {count} </h1>
      <button onClick={Increment}>Increment</button>
      <br />
      <button onClick={Decrement}>Decrement</button>
      <br />
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Counter;
