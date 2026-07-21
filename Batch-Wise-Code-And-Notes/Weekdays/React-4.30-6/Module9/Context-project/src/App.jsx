import React, { Children, createContext, useContext, useState } from "react";

// step 1 - defining context api

const counterContext = createContext();// React's inbuilt library

// step 2 - Defining a provider/ function which contains actual logic

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0); // state having a current value

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
     {/*  // child comp now having an access of my state variables */}
    </counterContext.Provider>
  );
}

// Step 3 : create a parent component called as counter.jsx

function Counter() {
  // Buisness logic is already written just use it directly

  return (
    <CountContextProvider>
      <Value />
      <Increment />
      <Decrement />
    </CountContextProvider>
  );
}

// Defining the components

function Value() {
  const {count} = useContext(counterContext); // step 1 we have def our context name

  return (
    <div>
      <h1>Current Count : {count} </h1>
    </div>
  );
}

function Increment(){

  const {count, setCount} = useContext(counterContext)

  return ( 

    <button onClick={()=>setCount(count+1)} >Increase</button>

  )

}

function Decrement(){


  const {count, setCount} = useContext(counterContext)

   return ( 

    <button onClick={()=>setCount(count-1)} >Decrease</button>

  )

}

function App() {
  return (
    <div>
      <h1>Context-api-demo</h1>
      <br />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
