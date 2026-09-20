import React from "react";
import Info from "./components/Info";
/* import Counter from "./components/Counter";
 */
function App() {
  return (
    <div>
      {/*  <h1>Counter app in reactJS</h1>
      <hr />

      <Counter /> */}

      <h2>Props practical in react</h2>
      <hr />

      <Info name="pritesh" age="24" address="shirdi,maharashtra" />
      <br />
      <hr />
      <Info name="rahul" age="26" address="pune" />
      <br />
      <hr />

      <Info name="RAJ" age="26" address="PCMC" />

      <hr />

      <Info name="pritesh" age="24" address="shirdi,maharashtra" />
      <br />
      <hr />
      <Info name="rahul" age="26" address="pune" />
      <br />
      <hr />

      <Info name="RAJ" age="26" address="PCMC" />
    </div>
  );
}

export default App;
