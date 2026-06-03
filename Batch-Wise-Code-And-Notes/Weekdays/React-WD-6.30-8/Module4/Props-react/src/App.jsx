import React from "react";
import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>Props in reactJS</h1>
      <Student name="Rahul" age="24" address="Pune" />

      <Student name="Shubham" age="30" address="PCMC" />
      <Student name="Nilesh" age="35" address="Mumbai" />
    </div>
  );
}

export default App;
