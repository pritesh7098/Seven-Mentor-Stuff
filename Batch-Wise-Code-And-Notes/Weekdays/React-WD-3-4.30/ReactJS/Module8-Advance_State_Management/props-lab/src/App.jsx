import React from "react";
import Student from "./components/Student";

// parent component

function App() {
  return (
    <div>
      <h1>Props and props drilling in reactJS</h1>
      <Student name="pritesh" age="24" isEligible={true} />
      <br />
      <Student name="rahul" age="34" isEligible={false}/>
      <br />
      <br />
    </div>
  );
}

export default App;
