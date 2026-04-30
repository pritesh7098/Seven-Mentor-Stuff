import React, { useEffect, useState } from "react";

function App() {
  // step1- define state

  const [currentTab, setCurrentTab] = useState("Home");

  // useEffect hook

  useEffect(() => {
    console.log("Clicked on a tab called as :" + currentTab);

    // home page loading
    // network page loading
  }, [currentTab]);

  // Defining the functions

  function Home() {
    setCurrentTab("Home");
  }

  function Network() {
    setCurrentTab("Network");
  }

  return (
    <div>
      <h1>Linkedin Navbar</h1>

      <br />

      {/*  step 2 - Defining UI  */}

      <nav style={{ padding: "2px" }}>
        <button
          onClick={Home}
          style={{ color: currentTab == "Home" ? "red" : "black" }}
        >
          Home
        </button>
        <button
          onClick={Network}
          style={{ color: currentTab == "Network" ? "red" : "black" }}
        >
          Network
        </button>
        <button>Jobs</button>
        <button>Messaging</button>
        <button>Notifications</button>
      </nav>
    </div>
  );
}

export default App;
