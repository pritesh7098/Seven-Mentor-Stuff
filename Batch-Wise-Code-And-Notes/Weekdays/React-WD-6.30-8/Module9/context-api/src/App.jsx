/* // Step 1 : crrating a context

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
      <Increment />
      <Decrement />
    </CountContextProvider>
  );
}

// consuming the context that we have created

function Value() {
  const { count } = useContext(counterContext);

  return <h1>Count : {count}</h1>;
}

// Homework

function Increment() {
  const { count, setCount } = useContext(counterContext);

  return <button onClick={Increment}> Increment </button>;
}

function Decrement() {
  const { count, setCount } = useContext(counterContext);

  return <button onClick={Decrement}>Decrement </button>;
}

import React from "react";

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
 */

import { createContext, useContext, useState } from "react";

// Step 1: Create Context
const CounterContext = createContext();

// Step 2: Create Provider
function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// Step 3: Parent Component
function Parent() {
  return (
    <>
      <Value />
      <Increment />
      <Decrement />
      <SetZero />
    </>
  );
}

// Step 4: Consume Context - Value Component
function Value() {
  const { count } = useContext(CounterContext);
  return <h2>Count: {count}</h2>;
}

// Step 5: Consume Context - Increment Component
function Increment() {
  const { count, setCount } = useContext(CounterContext);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

// Step 6: Consume Context - Decrement Component
function Decrement() {
  const { count, setCount } = useContext(CounterContext);

  return <button onClick={() => setCount(count - 1)}>Decrement</button>;
}

function SetZero() {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(0)}>Set Zero</button>;
}

// App Component
function App() {
  return (
    <CounterContextProvider>
      <Parent />
    </CounterContextProvider>
  );
}

export default App;
