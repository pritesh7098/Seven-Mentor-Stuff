import React from "react";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      
      <h1 style={{ fontSize: "36px", color: "#1e293b" }}>
        Learn Skills That Matter 🚀
      </h1>

      <p style={{ marginTop: "10px", color: "#475569", fontSize: "18px" }}>
        Upgrade your career with industry-ready courses in Web Development,
        React, and more.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>💻 Web Development</h3>
          <p>HTML, CSS, JavaScript from scratch</p>
        </div>

        <div style={cardStyle}>
          <h3>⚛️ React JS</h3>
          <p>Build modern web apps with React</p>
        </div>

        <div style={cardStyle}>
          <h3>📦 Projects</h3>
          <p>Hands-on real-world applications</p>
        </div>
      </div>

    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  width: "250px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

export default Home;