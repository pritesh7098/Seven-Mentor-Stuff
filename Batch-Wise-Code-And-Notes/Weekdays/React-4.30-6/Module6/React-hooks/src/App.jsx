import React, { useEffect, useState } from 'react'

function App() {

  const[count, setCount] = useState(11)

// Buisness logic

useEffect(()=>{

  // callback function - any operation you have to perform 

/*   console.log("Hello from VsCode")
  console.log("Hello from vscode2");
    console.log("Hello from vscode3");
 */

  console.log("Re-render because count is changed " +count)


},[count])



  // UI 

  return (
    <div>
      <h1>useEffect Hook in ReactJS</h1>
      <h3>heyy</h3>
      <h2>Count : {count } </h2>
    </div>
  )
}

export default App