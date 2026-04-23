import React, { createContext, useContext } from "react";

const userContext = createContext();

function Home() {
  const user = useContext(userContext);

  return (
    <>
      <h1>User Name : {user} </h1>
    </>
  );
}

function App() {
  const user = "Pritesh Dhanad";

  return (
    <userContext.Provider value={user}>
      <Home />
    </userContext.Provider>
  );
}

export default App;
