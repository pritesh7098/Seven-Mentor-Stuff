import React from "react";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>Learning react props</h1>
      <Student name="Pritesh" age="24" Iseligible={true} />

      <br />
      <hr />

      <Student name="Rahul" age="34" Iseligible={false} />
      <br />
      <hr />

      <Student/>
    </div>
  );
}

export default App;
