import React, { useEffect, useState } from "react";

function App() {
  // Buisness logic

  const [count, setCount] = useState(12);

  /* useEffct syntax */

  // 1st use case

  /*   useEffect(() => {
    // actual logic
    console.log("This will render everytime ");
  }); */

  // 2nd use case

  /*   useEffect(()=>{

    // empty dependency array -> load the logic only once 
    console.log("THe website is loaded now and then this statement is printed ");
    

  },[])  */

  // 3rd useCase

  useEffect(() => {
    // logic comes inside this will repeat again and again when the dependency array changes

    console.log("Current count : " + count);
  }, [count]);

  return (
    <div>
      <h1>useEffect in reactJS</h1>

      <hr />

      <h2>Count : {count}</h2>
    </div>
  );
}

export default App;
