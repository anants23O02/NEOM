import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/img/logo2.png";
import { FaBell, FaGlobe } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

export const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <nav>
      <div className={styles.NavbarItems}>
        <img className={styles.NavbarLogo} src={logo} alt="neom" />
        <ul className={styles.NavbarText}>
          <li
            className={activeIndex === 0 ? styles.activeD : ""}
            onClick={() => handleClick(0)}
          >
            <a href="#">Dashboard</a>
          </li>
          <li
            className={activeIndex === 1 ? styles.activeD : ""}
            onClick={() => handleClick(1)}
          >
            <a href="#">My Favorites</a>
          </li>
          <li
            className={activeIndex === 2 ? styles.activeD : ""}
            onClick={() => handleClick(2)}
          >
            <a href="#">Upcoming Events</a>
          </li>
          <li
            className={activeIndex === 3 ? styles.activeD : ""}
            onClick={() => handleClick(3)}
          >
            <FaBell />
          </li>
          <li
            className={activeIndex === 4 ? styles.activeD : ""}
            onClick={() => handleClick(4)}
          >
            Login
          </li>
          <li
            className={activeIndex === 5 ? styles.activeD : ""}
            onClick={() => handleClick(5)}
          >
            <RiGlobalLine />
          </li>
        </ul>
      </div>
    </nav>
  );
};
