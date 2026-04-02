// Header Component (Improved Navbar UI)
// Uses inline CSS only (no logic changes)

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between", // space between logo & links
        alignItems: "center",
        padding: "15px 40px",
        background: "linear-gradient(90deg, #0f172a, #1e293b)", // gradient bg
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      {/* Logo / Brand */}
      <h2
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: "bold",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
      >
        CodeCanvas
      </h2>

      {/* Navigation Links */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "25px",
            margin: 0,
            padding: 0,
          }}
        >
          {/* Common Link Style */}
          {["/", "/about", "/contact"].map((path, index) => {
            const labels = ["Home", "About", "Contact"];

            return (
              <li key={index}>
                <Link
                  to={path}
                  style={{
                    textDecoration: "none",
                    color: "#e2e8f0",
                    fontSize: "16px",
                    fontWeight: "500",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    transition: "all 0.3s ease",
                  }}
                  // Hover effect
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#38bdf8";
                    e.target.style.color = "#0f172a";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#e2e8f0";
                  }}
                >
                  {labels[index]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}