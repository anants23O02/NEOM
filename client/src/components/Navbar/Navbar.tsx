import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/img/logo2.png";
import { FaBell } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ProfileModal from "../ProfileModal/ProfileModal";
import { NotificationComponent } from "../NotificationModal/NotificationModal";
;
import {LanguageModal} from "../LanguageModal/LanguageModal";


export const Navbar: React.FC = () => {
  const [number, setNumber] = useState();
  const user = useSelector((state) => state.user.user);
  const data = user.user?.user || "logout";
  const [notif, setNotif] = useState(false);
  console.log('notif :>> ', notif);
  return (
    <>
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
                {
                  <NotificationComponent
                    userId={27}
                    setNotif={setNotif}
                    notif={notif}
                    setNumber={setNumber}
                    number={number}
                  />
                }
              <li>
                <ProfileModal user={data} />
              </li>
              <li>
                <LanguageModal />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
