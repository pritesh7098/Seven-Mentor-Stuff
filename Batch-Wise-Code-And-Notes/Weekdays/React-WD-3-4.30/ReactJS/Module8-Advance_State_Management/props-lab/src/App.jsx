import React from "react";
import Student from "./components/Student";

// parent component

function App() {
  return (
    <div>
      <h1>Props and props drilling in reactJS</h1>
      <Student name = "pritesh" age = "24" /> <br /><hr />
      <Student name="rahul" age="36" /> <br /> <hr />
      <Student name="shravani" age="22"/> 
    </div>
  );
}

export default App;
