import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <div className={{backgroundColor:"red"}}>
      <button className={styles.button}>Click me</button>
    </div>
  );
}

export default Button;
