import React from "react";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>Props in reactJS</h1>
      <Student name="Rahul" age="25" address="pune" />
      <Student name="Mahesh" age="25" address="PCMC" />
      <Student name="Rakul" age="25" address="Hadapsar" />
    </div>
  );
}

export default App;
