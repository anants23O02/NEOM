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
  const [notificationData, setNotificationData] = useState();
  const user = useSelector((state) => state.user.user);

  let data = user.user?.user || "logout";

  const userId = "27";
  const socketRef = useRef(null);
  
  useEffect(() => {
      let reconnectInterval = null;
      const connectWebSocket = () => {
          if (socketRef.current) return;
          socketRef.current = new WebSocket(`ws://localhost:8080?userId=${userId}`);
          socketRef.current.onopen = () => {
              console.log("WebSocket connected");
              // clearInterval(reconnectInterval); 
          };
  
          socketRef.current.onmessage = (event) => {
              const notification = JSON.parse(event.data);
              console.log("New Notification:", notification);
              setNotificationData(notification.message);
          };
  
          socketRef.current.onclose = () => {
              console.log("WebSocket disconnected, retrying...");
              socketRef.current = null;
          };
  
          socketRef.current.onerror = (error) => {
              console.error("WebSocket Error:", error);
              socketRef.current?.close();
          };
      };
  
      connectWebSocket();
  
      return () => {
          if (socketRef.current) {
              socketRef.current.close();
              socketRef.current = null;
          }
          clearInterval(reconnectInterval);
      };
  }, []);

  const handleBellClick = () => {
    setShowModal(!showModal);
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
              onClick={handleBellClick}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <FaBell style={{ color: "grey" }} />
              {showModal && <div>{`${notificationData}`}</div>}
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
