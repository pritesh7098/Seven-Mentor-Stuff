import React from "react";
import Styles from "../components/Navabar.module.css";

function Navabar() {
  return (
    <nav className={Styles.nav}>
      <h2 className={Styles.logo}>Logo</h2>

      <ul className={Styles.list}>
        <a>Home</a>
        <a>About</a>
        <a>Contact </a>
      </ul>
    </nav>
  );
}

export default Navabar;
