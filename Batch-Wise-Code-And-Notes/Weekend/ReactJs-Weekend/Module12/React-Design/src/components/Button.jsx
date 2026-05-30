import React from "react";

import Styles from "../components/Button.module.css";

function Button() {
  return (
    <div>
      <button className={Styles.button}>ClickME </button>
    </div>
  );
}

export default Button;
