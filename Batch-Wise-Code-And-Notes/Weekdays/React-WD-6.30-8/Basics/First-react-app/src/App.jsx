import React, { useState } from "react";

function App() {
  // buisness logic

  const [count] = useState(10); // react way
  const count = 10; // js way

  return (
    <div>
      {/* UI Part / UI Showcase  */}

      <h1>Count : {count} </h1>
      <button>Increment</button>
      <br />
      <button>Decrement</button>
      <br />
      <button>Reset</button>
    </div>
  );
}

export default App;
