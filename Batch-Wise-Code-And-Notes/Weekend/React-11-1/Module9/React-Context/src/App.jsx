import React, { createContext, useContext, useState } from "react";

function App() {
  // Buisness logic

  // step 1 : Defining the context

  const counterContext = createContext(); // created the context

  // step 2 : Defining the provider fun

  function CountContextProvider({ children }) {
    // application logic

    const [count, setCount] = useState(0);

    return (
      <counterContext.Provider value={{ count, setCount }}>
        {children}
      </counterContext.Provider>
    );
  }

  // step 3 : consuming the context with useContext hook

  function CounterApp() {
    return (
      <CountContextProvider>
        <Value />
        <Increase />
        <Decrease />
      </CountContextProvider>
    );
  }

  function Value() {
    const { count } = useContext(counterContext);

    return <p>Count : {count} </p>;
  }

  function Increase() {
    const { count, setCount } = useContext(counterContext);

    return <button onClick={() => setCount(count + 1)}>Increase</button>;
  }

  function Decrease() {
    const { count, setCount } = useContext(counterContext);

    return <button onClick={() => setCount(count - 1)}>Decrease</button>;
  }

  // UI

  return (
    <div>
      <h1>React context API </h1>
      <hr />
      <CounterApp />
    </div>
  );
}

export default App;
