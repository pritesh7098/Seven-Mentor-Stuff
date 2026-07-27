import React, { useState } from "react";

function Login() {
  // step 2 : adding state logic / buisness logic inside our UI Part

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState(""); // make user values as an empty


  // add address and the pincode 

  // Step 4 : what will happen after submitting the form 

  const handlerFunction = (e)=> { 

e.preventDefault() // it stops browser's default behaviour 
// backend req - postgres, mySQL with prisma an ORM 
console.log("Reccived cred from Frontend are : ", username, password )

  }

  // step 1 : defined the UI for form

  return (
    <form onSubmit={handlerFunction}>
      <h2>Login Form</h2>
      <label htmlFor="Username">User Name : </label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value); // step 3 : setting the value to the store which user has given 
        }}
      />
      <br />
      <br />
      <label htmlFor="Password">Password : </label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
          onChange={(e) => {
          setPassword(e.target.value); // step 3 : setting the value to the store which user has given 
        }}
      />
      <br />
      <br />
      <button>Login</button>
    </form>
  );
}

export default Login;
