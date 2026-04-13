import React from "react";

function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      
      <h1 style={{ color: "#1e293b", marginBottom: "20px" }}>
        About Us
      </h1>

      <p style={textStyle}>
        We are an EdTech platform focused on helping students and professionals
        build strong technical skills.
      </p>

      <p style={textStyle}>
        Our mission is to make learning simple, practical, and job-oriented.
        We focus more on hands-on projects rather than just theory.
      </p>

      <p style={textStyle}>
        Whether you are a beginner or looking to upgrade your skills, we have
        structured courses designed for real-world success.
      </p>

    </div>
  );
}

const textStyle = {
  fontSize: "18px",
  color: "#475569",
  lineHeight: "1.6",
  marginBottom: "15px",
};

export default About;