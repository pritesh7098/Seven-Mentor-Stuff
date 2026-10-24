// // step 2 - creating a navabar

// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div style={{ textDecoration: "none", display: "flex" }}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">ContactUS</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


/* AI generated Navbar  */ 



import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        DevSpace<span>.</span>
      </Link>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Link to="/contact" className="nav-cta">
        Let's Talk <span>↗</span>
      </Link>
    </header>
  );
}

export default Navbar;
