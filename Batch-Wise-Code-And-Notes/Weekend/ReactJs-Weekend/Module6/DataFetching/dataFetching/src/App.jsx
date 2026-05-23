/* import React, { useEffect, useState } from "react";

function App() {
  // STEP1 - defining states

  const [post, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step2 - useEffect with fetch

  useEffect(() => {
    fetch("https://api.github.com/users/pritesh709")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // step 3

  if (loading) return <p>Loading....</p>;

  if (error) return <h3>error : {error} </h3>;

  // step 4 - showcasing on UI

  return (
    <div>
      <h1>Data fetching in REACTJS</h1>
      <h2>Name : {post.login}</h2>
      <h3>Email : {post.email}</h3>
      <h3> Following : {post.following}</h3>
    </div>
  );
}

export default App;
 */

/* import React, { useEffect, useState } from 'react'

const App = () => {

// Step 1

const [post, setPost] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState (null);

// step 2 - promises 

useEffect (() => {
   fetch ("https://jsonplaceholder.typicode.com/todos/1")
   .then (response =>  response.json())
   .then ((data) => {
    setPost(data);
    setLoading (false);
   })
   .catch ((error) => {
    setError(error.message);
    setLoading(false);
   })
}, [])

// step 3 

if (loading) return <p>Loading...</p>
if (error) return <p>error : {error}</p>


  return (
    <div>
      <h1>Data fetching in REACT</h1>
      <h2>Id: {post.userId}</h2>
      <h2>Title: {post.title}</h2>
    </div>
  )
}

export default App */

/* ---------------------------------------------------------- */

// Data fetching using async await

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  // Buisness logic

  //step 1 - defining the states
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // step 2 - calling the api

  async function fetchPosts() {
    const reposnse = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const jsonData = await reposnse.json();

    setPost(jsonData);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [post]); // atleast run once 

  if (loading) return <h2>Loading please wait ..... </h2>;

  return (
    <div>
      <h1>Data fetching using async await</h1>
      <h2>USerID : {post[0]?.id}</h2>
      <h2> Post Title : {post[0]?.title}</h2>
    </div>
  );
}

export default App;
