import React from "react";
//import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Eligible:{props.Iseligible ? "yes" : "no"}</p>
    </div>
  );
}

// props type - good for debugging and handling error

/* Student.PropTypes = {
  name: PropTypes.name,
  age: PropTypes.age,
  Iseligible: PropTypes.bool,
}; */

// default props

Student.defaultProps = {
  name: "guest",
  age: "20",
  Iseligible: true,
};

export default Student;
