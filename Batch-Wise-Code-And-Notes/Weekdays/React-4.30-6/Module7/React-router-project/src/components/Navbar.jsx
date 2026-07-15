// navabar component which stays static at start/ top

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul  style={{textDecoration:"none", display:"flex" , listStyleType:"none", justifyContent:"space-evenly"}}>
        <li>
          <Link to="/">Home</Link> {/* < a href ="link" /> */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
