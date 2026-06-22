 import React, { useState } from "react";

function App() {
  // states for email and pasword to manage it later on

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // task : add user name and address 


  // function to call after login or register

  const handleSubmit = (e) => {
    // we try to print values on console

    e.preventDefault(); // prevent default is a js method which stops default ongoing processes by the the browser and make space for the current req.


    // send data to backend or for now print on console

    console.log("Form Submitted with the entries : ", email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Email">Email : </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <label htmlFor="password"> Password :</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button>Login</button>
    </form>
  );
}

export default App;
 


/* Uncontrolled Forms / Components */ 

import React, { useRef } from 'react'

function App() {

  // Buisness logic 

  
  // Step 1 : initalizing ref variables instead of managing states. 

const emailRef = useRef(); 
const passwordRef = useRef(); 

  // task : add user name and address 



const handleSubmit = (e)=>{

  e.preventDefault();
  console.log("Email:" , emailRef.current.value, "Password:", passwordRef.current.value
   );

}




  return (
    <form onSubmit={handleSubmit}>

<h1>Uncontrolled Form </h1>

 <label htmlFor="Email">Email : </label>
<input type="email" placeholder="Enter your email" ref={emailRef}/>
<br />
 <label htmlFor="password">Password : </label>
<input type="password " placeholder="Enter your password" ref={passwordRef} />
<br />

      <button type="submit">Submit</button>


    </form>
  )
}

export default App