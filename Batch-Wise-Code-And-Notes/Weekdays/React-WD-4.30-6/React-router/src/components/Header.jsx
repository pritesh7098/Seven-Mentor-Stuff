/* import React from "react";

function Header() {
  return (
    <div>
      <h1>I am Header </h1>
    </div>
  );
}

export default Header;
 */


import React from "react";

function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "30px 20px",
        background: "linear-gradient(to right, #1e293b, #334155)",
        color: "#f1f5f9",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "32px", letterSpacing: "1px" }}>
        Welcome to My App
      </h1>
      <p style={{ marginTop: "10px", opacity: 0.8 }}>
        React Router Demo UI
      </p>
    </header>
  );
}

export default Header;