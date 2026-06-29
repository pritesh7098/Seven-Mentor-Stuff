/*  import React, { useEffect, useState } from "react";

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

// import { useEffect, useState } from "react";

/* --------------------------------------------------------- */

 
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
{       <h3>Status:{todos.completed.toString()}</h3>
 }      <h3>Status: {todos.completed ? "Completed" : "Not Completed"}</h3>
      <h3>Title:{todos.title}</h3>
    </div>
  );
}

export default App;
 

/* -------------------------------------------- */

// Date fetching using async await

/* import React, { useEffect, useState } from "react";

function App() {
  // step 1 - Defining the states

  const [post, setPosts] = useState([]); // defining an empty array
  const [loading, setLoading] = useState(true);

  // step 2 - actuall calling

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const finaldata = await response.json();

    setPosts(finaldata);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []); // atleat run once

  // step 3 - UI Showcase

  if (loading) return <p>Loading posts please wait ..... </p>;

// step 4 - actaul data fetching 

  return (
    <div>
      <h1>Data fetching using async await </h1>
      <h2>{post[0]?.title}</h2>
      <h3>{post[0]?.body}</h3>
      <h3>{post[1]?.title}</h3>
    </div>
  );
}

export default App;
 */


/* ------------------------------------------------------------------- */


import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      // response.data contains the parsed JSON from the API.
      // setUsers(data) updates the React state with that JSON and stores it in state so you can access it.
  }, []);

  return (
    <div >
      <h1 >User List (using Axios)
      </h1>
      <ul>
        {users.map(user => (
          <li key={user.id} >
            <h2 >{user.name}</h2>
            <p >{user.email}</p>
            <p>{user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
//Map through the stored data in the state and display the contents
// in a list and access the properties from the data(user.name)
  );
}

export default App;