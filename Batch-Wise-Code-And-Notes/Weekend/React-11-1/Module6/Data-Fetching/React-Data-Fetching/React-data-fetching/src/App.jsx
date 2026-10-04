// import React, { useEffect, useState } from "react";

// function App() {
//   // Buisness logic

//   // step 1 : Defining the states

//   const [data, setData] = useState([]); /* bcz idk the data yet  */
//   const [loading, setLoading] =
//     useState(true); /* by default it sets to true only */
//   const [error, setError] =
//     useState(null); /* we dont know if error is coming or not  */

//   // Step 2 : Actually fetching the data with .then .catch

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/2")
//       .then((response) => response.json())
//       .then((data) =>  {
//         setData(data) // actual data will be set on : data var
//         setLoading(false)
//       }
//       )
//       .catch((error) => {
//         setError("Something went wrong", error);
//         setLoading(false);
//       });
//   }, []); // empty dep array which runs atleast once

//   // step 3 : Defining the UI Part

//   if(loading) return <p>Loading ... </p>
//   if (error) return <p>Something went wrong</p>

//   // UI

//   return (
//     <div>
//       <h1>Data Fetching - React </h1>
//       <hr />

//       <h3>id : {data.id} </h3>
//       <h3>Name : {data.name} </h3>
//       <h3>username : {data.username} </h3>
//       <h3>email : {data.email} </h3>
//      <p>{data[0]?.id}</p>  {/* error - you can't fetch the data enclosed with obj if you want to - use array instead  */}
//     </div>
//   );
// }

// export default App;

/* ---------------------------------------------- */

// Todo's assignment

// import React, { useState,useEffect } from 'react'

// function App() {

//   // Business logic

//   // step 1: Defining the states
//   const [data, setData] = useState(null);
//   // bcz idk the data yet, so we can set it to null
//   const [loading, setLoading] = useState(true);
//   // bcz we are loading the data, so we can set it to true
//   const [error, setError] = useState(null);
//   // bcz we don't know if there is an error or not, so we can set it to null

//   // step 2: Fetching the data from the API with .then .catch

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((data) => {
//       setData(data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       setError("Something went wrong while fetching the data from the API", error);
//       setLoading(false);
//     });
//   },[]);  // the empty array means that the useEffect will run only once when the component is mounted

//   // step 3: Rendering the data in the UI

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Something went wrong!</p>

//   return (
//     <div>
//       <h1>Data Fetching in React</h1>
//       <br/>
//       <hr/>
//       <br/>
//       <h3>userId: {data.userId}</h3>
//       <h3>Id: {data.id}</h3>
//       <h3>Title: {data.title}</h3>
//       <h3>Completed: {data.completed.toString()}</h3>

//     </div>
//   );
// }

// export default App

/* ----------------------------------------------------------- */

// Async await approach

import React, { useState, useEffect } from "react";

export default function App() {
  // Business logic

  // step 1: Defining the states
  const [data, setData] = useState(null);
  // bcz idk the data yet, so we can set it to null
  const [loading, setLoading] = useState(true);
  // bcz we are loading the data, so we can set it to true
  const [error, setError] = useState(null);
  // bcz we don't know if there is an error or not, so we can set it to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/2",
        );

        const data = await response.json();

        setData(data);
      } catch (error) {
        setError("Something went wrong while fetching the data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // step 3: Rendering the data in the UI

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <h1>Data Fetching in React</h1>
      <br />
      <hr />
      <br />
      <h3>userId: {data.userId}</h3>
      <h3>Id: {data.id}</h3>
      <h3>Title: {data.title}</h3>
      <h3>Completed: {data.completed.toString()}</h3>
    </div>
  );
}
