import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo2.png";
import { FaBell } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

export const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <nav className="container navbar">
      <div className={styles.NavbarItems}>
        <img className={styles.NavbarLogo} src={logo} alt="neom" />
        <div className={styles.NavItems}>

        <ul className={styles.NavbarOptions}>
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
        </ul>
        <ul className={styles.NavbarProfile}>
          <li>
            <FaBell style={{color:"grey"}} />
          </li>
          <li>Login</li>
          <li>
            <RiGlobalLine />
          </li>
        </ul>
            </div>
      </div>
    </nav>
  );
};
