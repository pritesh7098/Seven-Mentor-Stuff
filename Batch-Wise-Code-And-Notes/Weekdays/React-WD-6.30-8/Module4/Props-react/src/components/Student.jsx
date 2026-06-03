/* import React from "react";

function Student() {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px",
        margin: "20px",
        backgroundColor: "gray",
      }}
    >
      <h2>Name : "Rahul"</h2>
      <h3>Age : 24 </h3>
      <h4>Address : "Pune, Maharashtra"</h4>
    </div>
  );
}

export default Student;
 */

// props logic

export default function Student(props) {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px",
        margin: "20px",
        backgroundColor: "gray",
      }}
    >
      <h2>Name : {props.name}</h2>
      <h3>Age : {props.age}</h3>
      <h4>Address ; {props.address}</h4>
    </div>
  );
}
