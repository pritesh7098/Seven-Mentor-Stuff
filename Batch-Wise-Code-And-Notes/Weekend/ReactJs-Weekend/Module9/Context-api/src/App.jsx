import React, { Children, createContext, useContext, useState } from "react";

// Step 1 : Defining the context

const CounterContext = createContext(); // Defininingg the context

// Step 2 : Defining the provider

function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0); // main logic that other comp can use

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// Step 3 : Consuming the context - consumer

// i have parent component called as Counter -> Count, Increment , Decrement, Reset

function Counter() {
  return (
    <CounterContextProvider>
      <Value />
      <Increment />
      <Decrement />
      <Reset />
    </CounterContextProvider>
  );
}

// Actual Consumtion of values that defined in centralize place

function Value() {
  const { count } = useContext(CounterContext);

  return <p> Count : {count} </p>;
}

function Increment() {
  const { count, setCount } = useContext(CounterContext);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

function Decrement() {
  const { count, setCount } = useContext(CounterContext);

  return <button onClick={() => setCount(count - 1)}>Decrement</button>;
}

function Reset() {
  const { count, setCount } = useContext(CounterContext);

  return <button onClick={() => setCount(0)}>Reset</button>;
}

function App() {
  return (
    <div>
      <h1>Context API Demo</h1>
      <Counter />
    </div>
  );
}

export default App;
