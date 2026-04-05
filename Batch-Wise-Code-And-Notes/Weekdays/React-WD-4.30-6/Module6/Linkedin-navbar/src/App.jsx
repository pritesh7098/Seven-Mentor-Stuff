import React, { useEffect, useState } from "react";

function App() {
  // buisness logic

  const [currentTab, setCurrentTab] = useState("Home");

  useEffect(()=>{

    console.log("You have clicked on tab called as :", currentTab)

  },[currentTab])

  function HomeFunction() {
    setCurrentTab("Home");
  }

  function NetworkFunction() {
    setCurrentTab("MyNetwork");
  }

  function JobsFunction() {
    setCurrentTab("Jobs");
  }

  function MesagingFunction() {
    setCurrentTab("Messaging");
  }

  function NotificationFunction() {
    setCurrentTab("Notifications");
  }

  // UI Showcase
  return (
    <div>
      <h1>Linkedin Navabar</h1>
      <button
        onClick={HomeFunction}
        style={{ color: currentTab == "Home" ? "red" : "black" }}
      >
        Home
      </button>
      <button
        onClick={NetworkFunction}
        style={{ color: currentTab == "MyNetwork" ? "red" : "black" }}
      >
        MyNetwork
      </button>
      <button
        onClick={JobsFunction}
        style={{ color: currentTab == "Jobs" ? "red" : "black" }}
      >
        Jobs
      </button>
      <button
        onClick={MesagingFunction}
        style={{ color: currentTab == "Messaging" ? "red" : "black" }}
      >
        Mesaging
      </button>
      <button
        onClick={NotificationFunction}
        style={{ color: currentTab == "Notifications" ? "red" : "black" }}
      >
        Notifications
      </button>
    </div>
  );
}

export default App;
