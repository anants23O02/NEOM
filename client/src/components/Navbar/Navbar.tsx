 import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/img/logo2.png";
import { FaBell } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ProfileModal from "../ProfileModal/ProfileModal";
import { NotificationModal } from "../NotificationModal/NotificationModal";

export const Navbar: React.FC = () => {
  const user = useSelector((state) => state.user.user);  
  const data = user.user?.user || "logout";
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
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li
              className={
                location.pathname === "/favorites" ? styles.activeD : ""
              }
            >
              <Link to="/favorites">My Favorites</Link>
            </li>
            <li
              className={
                location.pathname === "/upcoming" ? styles.activeD : ""
              }
            >
              <Link to="/upcoming">Upcoming Events</Link>
            </li>
          </ul>
          <ul className={styles.NavbarProfile}>
            <li style={{ position: "relative", cursor: "pointer" }}>
              {/* <FaBell style={{ color: "grey" }} />
              {showModal && notificationData && (
                <NotificationModal
                  data={notificationData}
                  onClose={() => setShowModal(false)}
                />
              )} */}
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
