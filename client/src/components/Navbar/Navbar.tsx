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
  const [showModal, setShowModal] = useState(false);
 
  const bellRef = useRef<HTMLLIElement>(null);

  const user = useSelector((state) => state.user.user);
  let data = user.user?.user || "logout";
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => console.log("Connected to WebSocket");

    socket.onmessage = (event) => {
      console.log("Notification received:", event.data);
      setShowModal(true);
    };

    socket.onerror = (error) => console.error("WebSocket error:", error);

    return () => socket.close();
  }, []);

  const handleBellClick = () => {
    setShowModal(!showModal)
  };

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
            <li
              ref={bellRef}
              onClick={handleBellClick}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <FaBell style={{ color: "grey" }} />
              {showModal && <div>notifications</div>}
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
