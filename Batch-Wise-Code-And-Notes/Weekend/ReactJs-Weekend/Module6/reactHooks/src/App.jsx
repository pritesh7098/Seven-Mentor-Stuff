import React, { useEffect, useState } from "react";

function App() {
  // Buisness logic

  const[count,setCount] = useState(1)

  useEffect(() => {
    console.log("Component renders " , count);
  },[count]);

  return (
    <div>
      <h1>UseEffect Hooks</h1>
    </div>
  );
}

export default App;
