/* import React, { useState } from "react";

// Function child 

function Child() {
  console.log("Child Component Rendered");
  console.log(5+2) // 7 



  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child />
    </div>
  );
}

export default App;
 */

/* ------------------------------------------------------------- */

// Optimized code with React.memo

import React, { useState, memo } from "react";

const Child = memo(function Child() {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
});

const Child2 = memo(function Child2() {
  console.log("Child2 Component Rendered");

  return <div>Hello from Child 2</div>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child />
      <Child2 />
    </div>
  );
}

export default App;
