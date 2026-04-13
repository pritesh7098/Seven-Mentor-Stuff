/* import React from "react";
import { Link } from "react-router-dom";

function Navabar() {
  return (
    <div>
      <ul style={{ display: "flex", gap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
}

export default Navabar;
 */


import React from "react";
import { Link } from "react-router-dom";

function Navabar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        padding: "15px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link style={linkStyle} to="/">Home</Link>
        </li>
        <li>
          <Link style={linkStyle} to="/about">About</Link>
        </li>
        <li>
          <Link style={linkStyle} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: "#e2e8f0",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500",
  transition: "0.3s",
};

export default Navabar;