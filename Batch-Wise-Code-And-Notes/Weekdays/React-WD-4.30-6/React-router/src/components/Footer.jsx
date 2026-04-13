/* import React from 'react'

function Footer() {
  return (
    <div>

<h1>This is Footer at last</h1>

    </div>
  )
}

export default Footer */


import React from "react";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "20px",
        textAlign: "center",
        background: "#0f172a",
        color: "#cbd5f5",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        © 2026 My React App | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;