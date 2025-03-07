import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/img/logo2.png";
import { FaBell } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PositionedModal } from "../LoginModal/LoginModal";
import ProfileModal from "../ProfileModal/ProfileModal";

export const Navbar: React.FC = () => {
  const user = useSelector((state) => state.user.user);
  let data = "logout";
  if (user.user?.user) {
    data = user.user.user;
  }
  return (
    <nav className="container navbar">
      <div className={styles.NavbarItems}>
        <Link to="/dashboard">
          <img className={styles.NavbarLogo} src={logo} alt="neom" />
        </Link>
        <div className={styles.NavItems}>
          <ul className={styles.NavbarOptions}>
            <li
              className={
                location.pathname === "/dashboard" ? styles.activeD : ""
              }
            >
              <a href="#">
                {" "}
                <Link to="/dashboard">Dashboard</Link>{" "}
              </a>
            </li>
            <li
              className={
                location.pathname === "/favorites" ? styles.activeD : ""
              }
            >
              <a>
                {/* My Favorites */}
                <Link to="/favorites">My Favorites</Link>
              </a>
            </li>
            <li
              className={
                location.pathname === "/upcoming" ? styles.activeD : ""
              }
            >
              <a href="#">
                <Link to="/upcoming">Upcoming Events</Link>
              </a>
            </li>
          </ul>
          <ul className={styles.NavbarProfile}>
            <li>
              <FaBell style={{ color: "grey" }} />
            </li>
            <li>
              <ProfileModal user={data} />
            </li>
            <li>
              <RiGlobalLine />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
