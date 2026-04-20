/* import React from "react";

function Student() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "4px ",
        margin: "2px",
        border: "4px solid red ",
      }}
    >
      <h3>Name : Rahul</h3>
      <p>Age : 25 </p>
      <p>Address : Pune, maharashtra</p>
    </div>
  );
}

export default Student;
 */

import React from "react";

function Student({name,age,address}) {
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "4px ",
        margin: "2px",
        border: "2px solid red ",
      }}
    >
      <h1>Name :{name} </h1>
      <h2>Age : {age}</h2>
      <p>Address : {address}</p>
    </div>
  );
}

export default Student;
