import React, { useState } from "react";

// counter function named as a parent component

export function Parent() {
  const [count, setCount] = useState(0); // state in parent comp

  return (
    <div>
      <Count count={count} setCount={setCount} />
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
}

// childs

function Count({ count }) {
  // value print

  return <p>Count:{count}</p>;
}

function Increase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase </button>;
}

function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease </button>;
}
