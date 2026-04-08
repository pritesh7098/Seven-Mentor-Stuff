import React from "react";
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
