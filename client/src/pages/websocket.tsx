  import { useState, useEffect, useRef } from "react";
import {useSelector} from "react-redux";
export const Websocket: React.FC = () => {
    const data = useSelector((state) => state.user.user.user);

  const [notificationData, setNotificationData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const socketRef = useRef(null);

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
      socketRef.current.close();
    };


  }, []);
  return <>{notificationData?notificationData.event_id:""}</>;
};
