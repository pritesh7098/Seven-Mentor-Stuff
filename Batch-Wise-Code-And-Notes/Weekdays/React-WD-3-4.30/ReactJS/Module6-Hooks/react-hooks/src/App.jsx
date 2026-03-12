/* import React, { useEffect, useState } from "react";

function App() {
  // logical part

  // const[count, setCount] = useState(3)

  useEffect(() => {
    console.log("Testing the useEffect hook");
    console.log("Count:", count);
    
  },[count]);    
 
  return ( 
    <>
      <div>UseEffect Hook In ReactJS</div>
    </>
  );
}

export default App;
 */

/* -------------------------------------------------- */

/* import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
      // const res = fetch("")
    }, 3000);

    return () => {
      clearInterval(timer); // cleanup
    };
  }, []);

  return (
    <div>
      <h1>Cleanup function </h1>
    </div>
  );
}

export default App; */

/* ---------------------------------------------------------------------- */
