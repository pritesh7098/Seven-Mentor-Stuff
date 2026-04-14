import React, { useState, useRef } from "react";

function Registration() {
  // ✅ Controlled states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ❌ Uncontrolled refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();

  // Controlled handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") setFirstName(value);
    else if (name === "lastName") setLastName(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      // controlled values
      firstName,
      lastName,

      // uncontrolled values
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <h1>Registration Form</h1>

        <p>
          Hello my name is{" "}
          <span>
            {firstName} {lastName}
          </span>
        </p>

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

        {/* ================= UNCONTROLLED ================= */}
        <h3>Uncontrolled Inputs (useRef)</h3>

        <label>
          <p>Email:</p>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          ref={emailRef}
        />

        <label>
          <p>Password:</p>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          ref={passwordRef}
        />

        <label>
          <p>Phone:</p>
        </label>
        <input
          type="tel"
          placeholder="Enter phone number"
          ref={phoneRef}
        />

        <br /><br />

        <button type="submit">Signup</button>
      </div>
    </form>
  );
}

export default Registration;