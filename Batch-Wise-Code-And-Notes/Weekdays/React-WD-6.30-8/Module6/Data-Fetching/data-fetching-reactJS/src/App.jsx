/* import React, { useEffect, useState } from "react";

function App() {
  // Buisness logic

  // Step 1 - Defined states

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // step 2 - actaully calling the API

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        //  console.log("Error while fetching", error);
      });
  }, []); // run only on mount/first time

  // step 3 - message showcasing

  if (loading) return <h3>Loading Please Wait ... </h3>;
  if (error) return <h3>Something went wrong</h3>;

  // Step 4-  UI Logic
  return (
    <div>
      <h1>Data fetching in reactJS </h1>
      <h2>ID : {user.id}</h2>
      <h3>Name : {user.name}</h3>
      <h3>user-name : {user.username}</h3>
    </div>
  );
}

export default App;
 */

/* --------------------------------------------------------- */

/* 
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  //Buisness Logic
  //step-1 Defined states
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //step 2- actually calling API's
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/6")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); //run only on mount/first time

  //step-3 message showcasing

  if (loading) return <h3>LOADING Please Wait</h3>;
  if (error) return <h3>Something went wrong....</h3>;

  //UI Logic
  return (
    <div>
      <h1>Data Fecthing in React.js</h1>
      <h3>ID:{todos.id}</h3>
{/*       <h3>Status:{todos.completed.toString()}</h3>
 }      <h3>Status: {todos.completed ? "Completed" : "Not Completed"}</h3>
      <h3>Title:{todos.title}</h3>
    </div>
  );
}

export default App;
 */
