/*  import React, { useState } from "react";

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

export default Login; */
 

/* ------------------------------------------- */

import React, { useRef } from "react";

function Login() {

  // step 2 : Defining the states or buisness logic
  // Definig refferences instead of states in react  

  const userNameRef =  useRef();
  const passwordRef = useRef(); 

  // Add address and picode for this 


// Step 3 : last step - submitting the form 

const handlerFunction  = (e)=> { 

  e.preventDefault(); 
  console.log("Reccived username and password on backend : ", userNameRef.current.value, 
    passwordRef.current.value
  )


} 



// step 1 : Defining the UI 

  return (
    <form onSubmit={handlerFunction}>
      <label htmlFor="username">Username : </label>
      <input type="text" placeholder="Enter your username " ref={userNameRef} /> {/* step 3 - instead of value we use ref simp;ly  */}
      <br />
      <br />
      <label htmlFor="password">Password : </label>
      <input type="text" placeholder="Enter your password" ref={passwordRef} />
      <br />
      <br />
      <button>Login</button>
    </form>
  );
}

export default Login;
