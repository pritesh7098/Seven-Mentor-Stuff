/* 
// bad code 

import React, { useState } from "react";

function Child() {
  console.log("Child Component Rendered");

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
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child />
    </div>
  );
}

export default App;
 */

// optimized version

/* import React, { useState, memo } from "react";

const Child = memo(function Child() {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child />
    </div>
  );
}

export default App;
 */

// use Callback

/* import React, { useState, memo } from "react";

const Child = memo(({ handleClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default App; */

import React, { useState, memo, useCallback } from "react";

const Child = memo(({ handleClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default App;
