import React, { useEffect, useState } from "react";

function App() {
  // Buisness logic

  const [count] = useState(12);
  
  useEffect(() => {
    // useEffect logic

    console.log("Hello from useEffect hook " , count);
  },[count]); 
  /* Cleanup function  */
  /* 
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 3000);

  return () => {
    clearInterval(timer); // cleanup
  };
}, []); */

  // UI Logic

  return (
    <div>
      <h1>Hooks in ReactJS</h1>
    </div>
  );
}

export default App;
