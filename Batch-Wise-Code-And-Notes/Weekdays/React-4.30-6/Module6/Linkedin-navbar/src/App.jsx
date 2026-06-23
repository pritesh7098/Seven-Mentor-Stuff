import React, { useEffect, useState } from "react";

function App() {

  // step 1 : Loading the home feed at first 

  const[currentTab, setCurrentTab] = useState("Home")

  // useEffect hook 

  useEffect(()=>{

    console.log("Current tab on the page is : " +currentTab)

  },[currentTab])


  // step 2 : create the function 

  function HomeFunction(){

    setCurrentTab("Home")

  } 

  function NetworkFunction(){

    setCurrentTab("Network")

  }


  return (
    <div>
      <h1>Linkedin Navbar</h1>

      <button onClick={HomeFunction} style={{color : currentTab=="Home" ? "red": "gray"}} >Home</button>
      <button onClick={NetworkFunction} style={{color: currentTab=="Network" ? "red" : "gray"}}>MyNetwork</button>
      <button>Jobs</button>
      <button>Messaging</button>
      <button>Notifications</button>
    </div>
  );
}

export default App;
