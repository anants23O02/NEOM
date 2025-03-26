import React from "react";
import styles from "../../styles/RescheduleModal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  eventid:number;
}

export const RescheduleModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Hey Charlie,",
  message = "Are you sure you want to reschedule this event?",
  eventid
}) => {
  const handleReschedule =() => {
    window.location.href = `/rescheduled-event/${eventid}`;
  }
 
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
        <div className={styles.buttonRow}>
          <button onClick={handleReschedule} className={styles.confirmButton}>
            Yes, I'm sure
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
};


