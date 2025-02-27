import React from "react";
import styles from "../../styles/scheduleModal.module.css";
import {useDispatch} from "react-redux";
import {addEventSchedule} from "../../store/userSlice";

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose,eventId }) => {
  const dispatch = useDispatch()
  console.log('hapeening :>> ');

  const reserveSeat = () => {
    dispatch(addEventSchedule(eventId));
  }
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {/* Stop click from closing if user clicks inside the modal container */}
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        
        {/* Close button (X) in top-right corner */}
      

        <h2 className={styles.modalTimeRange}>10:30 AM - 7:30 PM</h2>

        <div className={styles.modalDates}>
          <div className={styles.dateField}>
            <label>From</label>
            <input type="date" defaultValue="2022-11-10" />
          </div>
          <div className={styles.dateField}>
            <label>To</label>
            <input type="date" defaultValue="2022-11-29" />
          </div>
        </div>

        <div className={styles.modalGuests}>
          <label>Guests</label>
          <select defaultValue="1 adult">
            <option>1 adult</option>
            <option>2 adults</option>
            <option>3 adults</option>
          </select>
        </div>

        <p className={styles.modalSeats}>172 Seats still available</p>

        <button onClick={reserveSeat} className={styles.modalReserveButton}>Reserve my seats</button>

        <p className={styles.modalHelp}>Need help?</p>
      </div>
    </div>
  );
};

export default MyModal;
