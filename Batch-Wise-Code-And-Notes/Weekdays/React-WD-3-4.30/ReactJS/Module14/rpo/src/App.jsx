import React, { useCallback } from "react";

function Parent() {
  const handleClick = () => {
    console.log("Clicked ");
  };

  return (
    <div>
      <button onClick={handleClick}> Click Me</button>
    </div>
  );
}

// optimized version

/* function Parent() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <button onClick={handleClick}> Click Me</button>
    </div>
  );
} */

function App() {
  return (
    <div>
      <h1>React performance optimization</h1>
      <Parent />
    </div>
  );
}

export default App;
