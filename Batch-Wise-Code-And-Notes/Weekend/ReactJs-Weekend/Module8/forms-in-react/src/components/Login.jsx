/* import React, { useState } from "react";

function Login() {
  // Buisness logic - defining states

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  // address , email, age 

  // Last stage - managing the handlers

  const handleSubmit = (e) => {
    e.preventDefault(); // preventing browser default behaviour

    console.log("Backend reccived values : ", userName, password);
  };

  // UI Part

  return (
    <form onSubmit={handleSubmit}>
      <hr />
      <label htmlFor="userName">Username : </label>
      <input
        type="text"
        placeholder="Enter your username here"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
      <br />

      <label htmlFor="password"> Password : </label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button type="submit">Submit</button>
      <hr />
    </form>
  );
}

export default Login;
 */

/* -------------------------------------- */

// uncontrolled forms

import React, { useRef, useState } from "react";

function Login() {
  // instead of states use refference variable

  let usernameRef = useRef();
  let passwordRef = useRef(); // useRef

  const [address, setAddress] = useState("");

  // handle submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Values submiteed through refs : ",
      usernameRef.current.value,
      passwordRef.current.value,
    );
  };

  // UI Part
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username : </label>
      <input type="text" placeholder="Enter user name" ref={usernameRef} />

      <br />

      <label htmlFor="password">Password : </label>
      <input
        type="password"
        placeholder="enter the password  "
        ref={passwordRef}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
