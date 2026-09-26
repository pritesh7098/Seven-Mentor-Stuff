import React, { useEffect, useState } from "react";

function App() {
  // Buisness logic

  // step 1 : Identifying the states in appn

  const [currentTab, setCurrentTab] = useState("Home");

  // step 3 : Creating a functions for actual interactivity

  function HomeFunction() {
    setCurrentTab("Home");
  }

  function MyNetwork() {
    setCurrentTab("MyNetwork");
  }

  // step 4 : using useEffect

  useEffect(() => {
    console.log("Current tab which is rendered on browser is : " + currentTab);
  }, [currentTab]);

  // UI
  return (
    <div>
      <h1>Linkedin Navabar - useEffect </h1>
      <br />
      <hr />

      {/* step 2 : Adding components  */}

      <nav>
        <button
          onClick={HomeFunction}
          style={{ color: currentTab == "Home" ? "red" : "black" }}
        >
          Home
        </button>
        <button
          onClick={MyNetwork}
          style={{ color: currentTab == "MyNetwork" ? "red" : "black" }}
        >
          MyNetwork
        </button>
        <button>Jobs</button>
        <button>Mesasging</button>
        <button>Notifications</button>
      </nav>
    </div>
  );
}

export default App;
