import { useState, useEffect,useRef } from "react";
import useWebSocket from "../../services/notificationService/NotificationListner";
import styles from "../../styles/NotificationModal.module.css";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { clearNotification } from "../../store/notificationSlice";
import { RescheduleModal } from "../RescheduleModal/RescheduleModal";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications"
import { CancelModal } from "../CancelModal/CancelModal";
export const NotificationComponent = ({
  userId,
  notif,
  setNotif,
  setNumber,
  number
}) => {
  

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
  const notificationData = useSelector((state) => state.notifications);
  const [visible, setvisible] = useState(notif);
  console.log(notificationData);
  const [index, setindex] = useState(0);
  const notifications = useWebSocket(27);
  const [modalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef(null);
  const isOpenRef = useRef(notif);
  const [position,setPosition] = useState();
  const [cancel,setcancel] = useState(false)
  console.log("this", notificationData.data);
  const findEventDetails = (eventId) => {
    return events.find((event) => eventId === event.id);
  };
  const findEventDate = (eventId) => {
    console.log('eventId,event.event_id here in find date:>> ', eventId,event);
    console.log( data.user_events.filter((event) => Number(eventId) === event.event_id)[0]);
    return data.user_events[0]
  };

  const showNotifications = (e) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    setPosition(
      {
        top: rect.bottom + window.scrollY + 15,
        left: rect.left + window.scrollX - 348,
      }
    )
    setNotif(!notif);
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
    setcancel(true)
    setvisible(false)
    // dispatch(clearNotification(id));
  };

  useEffect(() => {
    setNumber(notificationData.data.length);
    setvisible(notif);
    console.log(notificationData);
  }, [notificationData, notif]);

  useEffect(() => {
    isOpenRef.current = notif;
  }, [notif]);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpenRef.current) {
        console.log("Scroll detected! Closing modal...");
        setNotif(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setNotif(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <li ref={buttonRef} style={{ position: "relative", cursor: "pointer" }}>
        <Badge
          badgeContent={number}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "black",
              color: "white",
              fontSize: "0.6rem", 
              width: "16px", 
              height: "16px", 
              minWidth: "16px", 
            },
          }}
        >
          <NotificationsIcon
            style={{
              color: "grey",
              fontSize: "1.2rem", 
            }}
            onClick={(e) => showNotifications(e)}
          />
        </Badge>
      </li>

      <div>
        {notificationData.data.length !== 0 && (
          <RescheduleModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title={`Hey ${data.user.firstname},`}
            message="Are you sure you want to reschedule this event?"
            eventid={notificationData.data[index].event_id}
          />
        )}

{cancel && (
          <CancelModal
            isOpen={cancel}
            onClose={() => setcancel(false)}
            title={`Hey ${data.user.firstname},`}
            message="Are you sure you want to cancel this event?"
            eventid={notificationData.data[index].event_id}
          />
        )}

        {visible && notificationData.data.length !== 0 && (
          <>
            <div ref={modalRef} className={styles.modalContainer} style={{
              top:position.top,
              left:position.left
            }} >
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
          cancel your ${
            findEventDetails(notificationData.data[index].event_id).title
          } for ${
                    findEventDate(
                      notificationData.data[index].event_id
                    ).event_date.split("T")[0]
                  }?"`}
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
                      <div>{`${index + 1}/${
                        notificationData.data.length
                      }`}</div>
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
    </>
  );
};
