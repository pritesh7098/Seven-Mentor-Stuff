import React from "react";

// properties are dynamic values which you can add later ( 5 students )

function Student(props) {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Eligibility : {props.isEligible?"yes":"no"}</p>
    </div>
  );
}

export default Student;
