import { useEffect, useState } from "react";

const useWebSocket = (userId) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // if (!userId) return;
    console.log('userid :>> ', userId);
    const socket = new WebSocket(`ws://localhost:3000?userId=${userId}`);
    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("New Notification:", data);
        setNotifications((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    // socket.onerror = (error) => {
    //   console.error("WebSocket error:", error);
    // };

    return () => {
      socket.close();
    };
  }, [userId]);

  return notifications;
};

export default useWebSocket;
