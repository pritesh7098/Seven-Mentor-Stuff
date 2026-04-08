import React, { createContext, useContext, useState } from "react";

// 1- context logic - creating context

const CounterContext = createContext();

// 2 - provider for context - logic

function CountContextProvider({ children }) {
  // centalized state

  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// 3 - counter/parent function

function Parent() {
  return (
    <div>
      <CountContextProvider>
        <Count />
        <Increment />
        <Decrement /> {/* This are the three childrens */}
      </CountContextProvider>
    </div>
  );
}

// 4 - indivisual function for everything - useContext hook 

function Count() {
  const { count } = useContext(CounterContext);
  return <h2>Count : {count}</h2>;
}

function Increment() {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Decrement() {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function App() {
  return (
    <div>
      <h1>Context API in ReactJS</h1>
      <Parent />
    </div>
  );
}

export default App;
