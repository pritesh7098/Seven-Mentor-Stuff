import React, { useState, useRef } from "react";

function Registration() {
  // ✅ Controlled states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // email 

  // Controlled handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") setFirstName(value);
    else if (name === "lastName") setLastName(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // cleans all data

    const formData = {
      // controlled values
      firstName,
      lastName,
  
    };

    console.log("Logged"); // debugging

    console.log(formData); // form data
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <h1>Registration Form</h1>

        {/* ================= CONTROLLED ================= */}
        <h3>Controlled Inputs (React State)</h3>

        <label>
          <p>First Name:</p>
        </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          placeholder="Enter first name"
        />

        <label>
          <p>Last Name:</p>
        </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          placeholder="Enter last name"
        />

        <br />
        <br />

        <button type="submit" onClick={handleFormSubmit}>
          Signup
        </button>
      </div>
    </form>
  );
}

export default Registration;
