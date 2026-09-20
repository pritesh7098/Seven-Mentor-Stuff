import React from "react";

function Info(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h2>Address : {props.address} </h2>
    </div>
  );
}

export default Info;
