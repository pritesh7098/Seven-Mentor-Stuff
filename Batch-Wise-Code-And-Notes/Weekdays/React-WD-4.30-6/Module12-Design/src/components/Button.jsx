import React from "react";

import Styles from "./Button.module.css"

function Button() {
  return (
    <div>
      <button className={Styles.btnClass} >Click Me</button>
    </div>
  );
}

export default Button;
