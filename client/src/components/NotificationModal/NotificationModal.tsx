import React from "react";
import useWebSocket from "../../services/notificationService/NotificationListner";

export const NotificationComponent = ({ userId }) => {
  console.log('userId :>> ', userId);
  const notifications = useWebSocket(27);

  return (
    <div>
        {notifications.map((notif, index) => (
          <>
      <h2>Notifications</h2>
      <ul>
          <li key={index}>
            📢 Event {notif.event_id} rescheduled to {notif.rescheduled_date}
          </li>
      </ul>
      </>

        ))}
    </div>
  );
};


