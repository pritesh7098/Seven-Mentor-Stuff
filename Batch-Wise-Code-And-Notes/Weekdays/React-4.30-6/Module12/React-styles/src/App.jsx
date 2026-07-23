import React from "react";
import Button from "./components/Button";
import Button2 from "./components/Button2";

function App() {
  return (
    <div>
      <h1>Designing react app with css modules</h1>
      <Button />
      <Button2 />

<h2 style={{backgroundColor:"red", textAlign:"center"}}>This is heading 2 </h2>

<h2 className="p-2 m-2 bg-red text-center">This is h2 having tailwind utility classes</h2>

    </div>
  );
}

export default App;
