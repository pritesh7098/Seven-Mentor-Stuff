import React from "react";

function Contact() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      
      <h1 style={{ color: "#1e293b", marginBottom: "20px" }}>
        Contact Us
      </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input type="text" placeholder="Enter your name" style={inputStyle} />
        <input type="email" placeholder="Enter your email" style={inputStyle} />
        <textarea
          placeholder="Enter your message"
          rows="5"
          style={inputStyle}
        ></textarea>

        <button style={buttonStyle}>
          Submit
        </button>
      </form>

    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  background: "#1e293b",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Contact;