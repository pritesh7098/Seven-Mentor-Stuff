/* import React, { useEffect, useState } from "react";

function App() {
  // Buisness logic part

  const [currentTab, setCurrentTab] = useState("Home");

  // useEffect hook for debugging current tab

  useEffect(() => {
    console.log("The user clicked on tab called as : " + currentTab);
  }, [currentTab]);

  // functions after clicking on tabs

  function HomeFunction() {
    setCurrentTab("Home");
  }

  function NetworkFunction() {
    setCurrentTab("MyNetwork");
  }

  // UI Part - showcasing 5 buttons

  return (
    <div>
      <h1>Linkedin Navbar</h1>

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
      <button>Jobs</button>
      <button>Messaging</button>
      <button>Notifications</button>
    </div>
  );
}

export default App;
 */

// Optimized version of this navbar 

import React, { useEffect, useState } from "react";
function App() {
  const [currentTab, setCurrentTab] = useState("Home");

  //  Array of tabs

  const tabs = ["Home", "MyNetwork", "Jobs", "Notifications", "Messaging"];

  // Runs only when currentTab changes  
  // 
  useEffect(() => {    
    console.log("Clicked on tab:", currentTab);  },
     [currentTab]);


  return (
    <div style={{ backgroundColor: "gray", padding: "20px" }}>
      {" "}
      <h1>LinkedIn Navbar</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          style={{
            color: currentTab === tab ? "red" : "black",
            marginRight: "10px",
          }}
        >
          {" "}
          {tab}{" "}
        </button>
      ))}{" "}
    </div>
  );
}
export default App;
