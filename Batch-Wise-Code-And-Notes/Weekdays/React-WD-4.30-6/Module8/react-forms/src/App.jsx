import React, { useState } from "react";

function App() {
  // state logic

  // single source of truth
  const [userName, setUserNAme] = useState("");
  const [password, setPassword] = useState(""); // just make it empty

  const submitHandler = (e) => {
    e.preventDefault(); // js method for cleaning logic
    console.log({ userName, password });
  };

  return (
    // UI Logic

    <div>
      <h1>Forms in reactJS</h1>
      <hr />

      <form onSubmit={submitHandler}>
        <label htmlFor="userName">Enter User Name : </label>
        <input
          type="text"
          placeholder="Enter Your name"
          value={userName}
          onChange={(e) => {
            setUserNAme(e.target.value);
          }}
        />

        <br />
        <br />
        <label htmlFor="password">Enter Password :</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br />
        <br />

        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
