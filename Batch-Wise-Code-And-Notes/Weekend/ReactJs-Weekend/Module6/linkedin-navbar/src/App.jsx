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

/* import React, { useEffect, useState } from "react";
function App() {
  const [currentTab, setCurrentTab] = useState("Home");

  //  Array of tabs

  const tabs = ["Home", "MyNetwork", "Jobs", "Notifications", "Messaging"];
  const tabs2 = ["hshhs"]

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
 */


import React, { useEffect, useState } from "react";

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
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#f3f2ef",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "white",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 40px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Linkedin Logo */}
          <h1
            style={{
              color: "#0a66c2",
              fontSize: "32px",
              margin: 0,
            }}
          >
            in
          </h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "250px",
              padding: "10px 15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#eef3f8",
              outline: "none",
            }}
          />
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <button
            onClick={HomeFunction}
            style={{
              color: currentTab == "Home" ? "#0a66c2" : "#555",
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight: currentTab == "Home" ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            Home
          </button>

          <button
            onClick={NetworkFunction}
            style={{
              color: currentTab == "MyNetwork" ? "#0a66c2" : "#555",
              background: "none",
              border: "none",
              fontSize: "16px",
              fontWeight:
                currentTab == "MyNetwork" ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            MyNetwork
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              color: "#555",
              cursor: "pointer",
            }}
          >
            Jobs
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              color: "#555",
              cursor: "pointer",
            }}
          >
            Messaging
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "16px",
              color: "#555",
              cursor: "pointer",
            }}
          >
            Notifications
          </button>
        </div>
      </div>

      {/* Dummy Content */}
      <div
        style={{
          padding: "40px",
        }}
      >
        <h2>Current Active Tab : {currentTab}</h2>

        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "10px",
            marginTop: "20px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Welcome to LinkedIn Clone UI</h3>
          <p>
            This is a simple styled navbar project using React state and
            conditional styling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;