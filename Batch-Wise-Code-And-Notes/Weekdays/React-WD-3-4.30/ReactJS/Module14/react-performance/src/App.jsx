import React, { useCallback, useState } from "react";

function App() {

  const ClickHandler = useCallback(() => {
    console.log("Clicked");
  }, [count]); // dependency array

  return (
    <div>
      <h1>React Performance optimization</h1>

      <button onClick={ClickHandler}>Click ME</button>
    </div>
  );
}

export default App;
