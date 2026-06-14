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
