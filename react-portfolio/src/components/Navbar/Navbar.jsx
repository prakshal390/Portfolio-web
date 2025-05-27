import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Menu Handler
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.navbar}>
      <a href="#" className={styles.title}>{"< PJ />"}</a>

      {/* Menu Icon */}
      <img
        src="/assets/nav/menuIcon.png"
        alt="menu"
        className={styles.menuBtn}
        onClick={toggleMenu}
      />

      {/* Menu Items */}
      <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#Certificate" onClick={() => setMenuOpen(false)}>Certificate</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
