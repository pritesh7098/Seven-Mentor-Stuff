// Step 1 : crrating a context

import { createContext, useContext, useState } from "react";

const counterContext = createContext();

// Step 2 : creating a provider

function CountContextProvider({ children }) {
  // logic

  const [count, setCount] = useState(2); // logic can be used later on in another comp

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}

// creating a parent function

function Parent() {
  return (
    <CountContextProvider>
      <Value />
      {/*    <Increment />
      <Decrement /> */}
    </CountContextProvider>
  );
}

// consuming the context that we have created

function Value() {
  const { count } = useContext(counterContext);

  return <h1>Count : {count}</h1>;
}

// Homework 

function Increment() {}

function Decrement() {}

import React from "react";

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
