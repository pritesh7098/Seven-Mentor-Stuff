import React, { useState } from "react";
import Counter1 from "./components/Counter1";
import OnlyCount from "./components/OnlyCount";

function App() {
  return (
    <div>
      <h1>Custom hooks</h1>
      <br />
      <hr />

      <Counter1 />
      <br />
      <hr />
      <OnlyCount />
    </div>
  );
}

export default App;
