import { useState, useEffect } from "react";
import useWebSocket from "../../services/notificationService/NotificationListner";
import styles from "../../styles/NotificationModal.module.css";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { clearNotification } from "../../store/notificationSlice";
import { RescheduleModal } from "../RescheduleModal/RescheduleModal";

export const NotificationComponent = ({ userId, notify, setNotif }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
  const notificationData = useSelector((state) => state.notifications);
  const [visible, setvisible] = useState(notify);
  console.log(notificationData);
  const [index, setindex] = useState(0);
  const notifications = useWebSocket(27);
  const [modalOpen, setModalOpen] = useState(false);

  console.log("this", notificationData.data);
  const findEventDetails = (eventId) => {
    return events.filter((event) => eventId === event.id);
  };

  const setnext = () => {
    console.log(index);
    if (index !== notificationData.data.length - 1) {
      setindex(index + 1);
    }
  };
  const setprev = () => {
    console.log(index);
    if (index != 0) {
      setindex(index - 1);
    }
  };

  const handleClose = () => {
    setvisible(false);
    setNotif(false);
  };

  const handleReschedule = () => {
    setvisible(false);
    setNotif(false);
    setModalOpen(true);
  };

  const handleCancel = (id) => {
    dispatch(clearNotification(id));
  };

  useEffect(() => {
    setvisible(notify);
    console.log(notificationData);
  }, [notificationData, notify]);

  return (
    <div>
      {
        notificationData.data.length !==0 && (
          <RescheduleModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title={`Hey ${data.user.firstname},`}
            message="Are you sure you want to reschedule this event?"
            eventid={notificationData.data[index].event_id}
          />
        )
      }
      {visible && notificationData.data.length !== 0 && (
        <>
          
          <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={handleClose}>
                <IoIosCloseCircleOutline />
              </button>
              <h2 className={styles.modalTitle}>
                {`Hey ${data.user.firstname}`}
                <div className={styles.bell}>
                  <MdNotificationsActive />
                </div>
              </h2>
              <p className={styles.modalText}>
                {`"We regret to inform you that the current weather conditions are
          not conducive for any event. Would you like to reschedule or
          cancel your ${notificationData.data[index].event_id} for today?"`}
              </p>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.rescheduleButton}
                  onClick={handleReschedule}
                >
                  Reschedule
                </button>
                <button
                  onClick={() =>
                    handleCancel(notificationData.data[index].event_id)
                  }
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
                {notificationData.data.length > 1 && (
                  <>
                    <button className={styles.arrowButton} onClick={setprev}>
                      <HiOutlineArrowSmLeft />
                    </button>
                    <div>{`${index + 1}/${notificationData.data.length}`}</div>
                    <button className={styles.arrowButton} onClick={setnext}>
                      <HiArrowSmallRight />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
