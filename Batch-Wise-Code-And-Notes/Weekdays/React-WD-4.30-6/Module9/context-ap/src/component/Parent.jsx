import { createContext, useContext } from "react";
import {CountContextProvider  } from "../Context/CountContextProvider";

export default function Parent() {
  return (
    <CountContextProvider>
      <Value />
      <Increase />
      <Decrease />
    </CountContextProvider>
  );
}

// step 3 - consuming the logic in components

function Value() {
  const { count } = useContext(counterContext);

  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
}

function Increase() {
  const { count, setCount } = useContext(counterContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

function Decrease() {
  const { count, setCount } = useContext(counterContext);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
