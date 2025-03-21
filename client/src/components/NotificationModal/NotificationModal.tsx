import React, { useState, useEffect } from "react";
import useWebSocket from "../../services/notificationService/NotificationListner";
import styles from "../../styles/NotificationModal.module.css";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {useSelector} from "react-redux";

export const NotificationComponent = ({ userId }) => {
  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);

  const findEventDetails = (eventId) => {
    return events.filter((event) => eventId === event.id);  
  }

  console.log("userId :>> ", userId);
  const notifications = useWebSocket(27);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // if (!visible) return null;

  return (
    <div>
      
      {notifications.map((notif, index) => (true && (
      <div  className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={() => setVisible(false)}
        >
        <IoIosCloseCircleOutline onClick={() => setVisible(false)}/>
        </button>
        <h2 className={styles.modalTitle}>
          {`Hey ${data.user.firstname}`}
           <div className={styles.bell} >
           <MdNotificationsActive />
          </div>
        </h2>
        <p className={styles.modalText}>
          {`"We regret to inform you that the current weather conditions are
          not conducive for any event. Would you like to reschedule or
          cancel your ${findEventDetails(notif.event_id)[0].title} for today?"`}
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.rescheduleButton}>Reschedule</button>
          <button className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
      )))}
    </div>
  );
};
