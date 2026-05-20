// Navbar.jsx

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>MyApp</h2>

      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;