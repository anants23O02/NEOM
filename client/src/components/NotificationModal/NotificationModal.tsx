import React from "react";
import styles from "../../styles/NotificationModal.module.css";
import {useDispatch,useSelector} from "react-redux";


interface NotificationData {
  event_id?: string;
  user_id?: string;
  date?: string;
  message?: string;
}

interface NotificationModalProps {
  data: NotificationData;
  onClose: () => void;
}
export const NotificationModal: React.FC<NotificationModalProps> = ({ data, onClose }) => {
  const dispatch = useDispatch()
  const modal = useSelector((state: RootState) => state.modal);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const user = useSelector((state) => state.user.user);
  const [notificationData, setNotificationData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const userId = "27";
    socketRef.current = new WebSocket(`ws://localhost:8080/?userId=${userId}`);
    socketRef.current.onopen = () => console.log("Connected to WebSocket");
    socketRef.current.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      console.log("Notification received:", notification);
      setNotificationData(notification);
      setShowModal(true);
    };
    socketRef.current.onerror = (error) =>
      console.error("WebSocket error:", error);
    return () => {
        socketRef.current?.close();
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {data.event_id ? (
          <>
            <h2>New Notification</h2>
            <p>
              <strong>Event ID:</strong> {data.event_id}
            </p>
            <p>
              <strong>User ID:</strong> {data.user_id}
            </p>
            <p>
              <strong>Date:</strong> {data.date}
            </p>
          </>
        ) : (
          <p>{data.message}</p>
        )}
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};
