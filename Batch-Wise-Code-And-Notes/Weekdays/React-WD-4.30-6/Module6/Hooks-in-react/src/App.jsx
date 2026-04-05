import React, { useEffect, useState } from "react";

function App() {
  // buisness logic

  const [count, setCount] = useState(6);

  /*   useEffect(() => {
    // side effect code
    // fetching a data from backend
    // logging and monitoring
    // debugging etc

    console.log("  this is running ");
    console.log("count:", count);
  }, [count]); */

  // cleanup function

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 2000);

    return () => {
      clearInterval(timer); // cleanup
    };
  }, []);

  // UI Showcase

  return (
    <div>
      <h1>UseEffect In ReactJS</h1>
    </div>
  );
}

export default App;
