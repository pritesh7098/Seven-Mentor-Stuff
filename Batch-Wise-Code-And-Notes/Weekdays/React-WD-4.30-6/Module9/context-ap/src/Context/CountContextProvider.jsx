/* /* import { createContext, useState } from "react";

// step 1- creating a context
  const counterContext = createContext();

// step - 2 : create a context provider

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0); // 0

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        {children}
      </counterContext.Provider>
    </>
  );
} 


  import { useState,createContext, useContext } from "react";

// step 1- creating a context
export const counterContext = createContext();

// step - 2 : create a context provider

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0); // 0

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        {children}
      </counterContext.Provider>
    </>
  );
}

 */