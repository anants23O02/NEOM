import React from "react";
import styles from "../../styles/RescheduleFormModal.module.css";
import { rescheduleThisEvent } from "../../services/eventServices/EventAPI";
import { clearNotification } from "../../store/notificationSlice";
import { useDispatch } from "react-redux";
import { rescheduleEvent } from "../../store/userSlice";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RescheduleFormModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  event,
  notification,
  userData,
}) => {
  const dispatchEvent = useDispatch()
  const handleReserve = async () => {
    await rescheduleThisEvent(event.id,notification.rescheduled_date,dispatchEvent)
    dispatchEvent(rescheduleEvent({ eventid:event.id, rescDate:notification.rescheduled_date })); 
    onClose(false);
    window.location.href = `/alternate-event/${event.id}`;
  }
  if (!isOpen) return null;
  console.log(event, notification);
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className={styles.title}>Hey {`${userData.user.firstname}`},</h2>
        <p className={styles.message}>
          You have chosen a new <b>{`${event.title}`} </b> event on{" "}
          {`${notification.rescheduled_date.split("T")[0]}`}. Have a great day
          ahead and enjoy your new {`${event.title}`} !
        </p>

        <div className={styles.dropdownContainer}>
          <div className={styles.drowpdown}>
            <label>Date</label>
            <select disabled={true}>
              <option value={notification.rescheduled_date.split("T")[0]}>
                {notification.rescheduled_date.split("T")[0]}
              </option>
            </select>
          </div>

          <div className={styles.drowpdown}>
            <label>Time Slot</label>
            <select style={{ width: "14rem !important" }} disabled={true}>
              <option>10:00 AM - 3:30 PM</option>
            </select>
          </div>
        </div>
        <div className={styles.drowpdown}>
          <label>Number of Guest</label>
          <select>
            <option>1 Guest</option>
            <option>2 Guest</option>
            <option>3 Guest</option>
          </select>
        </div>

        <div className={styles.buttonRow}>
          <button onClick={() => handleReserve()} className={styles.confirmButton}>Reserve my seats</button>
          <button
            className={styles.cancelButton}
            onClick={() => onClose(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
