import React from "react";
import styles from "../../styles/RescheduleModal.module.css";
import { removeScheduleEvent } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { clearNotification } from "../../store/notificationSlice";
import { useNavigate } from "react-router-dom";
import { deleteEntry } from "../../services/eventServices/EventAPI";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  eventid: number;
}

export const CancelModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Hey Charlie,",
  message = "Are you sure you want to reschedule this event?",
  eventid,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCancel = async () => {
    await dispatch(removeScheduleEvent(eventid));
    const res = await deleteEntry(eventid);
    onClose(false);
    console.log("cancelling event");
    navigate(`/alternate-event/${eventid}`);
  };

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
          <button onClick={handleCancel} className={styles.confirmButton}>
            Yes, I'm
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
};
