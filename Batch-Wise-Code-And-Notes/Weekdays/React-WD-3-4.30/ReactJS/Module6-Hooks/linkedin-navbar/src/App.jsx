import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  // logic part

  const [currentTab, setCurrentTab] = useState("home");

  // useEffect

  useEffect(() => {
    console.log("Clicked on a tab called as : " + currentTab);
  }, [currentTab]);

  function homeFunction() {
    setCurrentTab("home");
  }

  function MyNetworkFunction() {
    setCurrentTab("MyNetwork");
  }

  function JobsFunction() {
    setCurrentTab("Jobs");
  }

  function MessagingFunction() {
    setCurrentTab("Messaging");
  }

  function Notificationsfunction() {
    setCurrentTab("Notifications");
  }

  // UI Part
  return (
    <div>
      <h1>Linkedin Navbar</h1>
      <button
        onClick={homeFunction}
        style={{ color: currentTab == "Home" ? "red" : "black" }}
      >
        Home
      </button>

      <button
        onClick={MyNetworkFunction}
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
        onClick={MessagingFunction}
        style={{ color: currentTab == "Messaging" ? "red" : "black" }}
      >
        Messaging
      </button>

      <button
        onClick={Notificationsfunction}
        style={{ color: currentTab == "Notifications" ? "red" : "black" }}
      >
        Notifications
      </button>
    </div>
  );
}

export default App;
