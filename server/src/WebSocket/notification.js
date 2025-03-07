import { WebSocketServer } from "ws";
import pool from "../config/db.js";

const wss = new WebSocketServer({ port: 8080 });
const users = new Map();

wss.on("connection", (ws, req) => {
  try {
    const urlParams = new URL(req.url, `http://${req.headers.host}`);
    const userId = urlParams.searchParams.get("userId");
      if (userId) {
          users.set(userId, ws);
          console.log(`User ${userId} connected`);
      } else {
          console.log("Invalid userId, closing socket");
          ws.close();
      }
  } catch (error) {
      console.error("Error parsing WebSocket URL:", error);
      ws.close();
  }

  ws.on("close", () => {
      users.delete(userId);
      console.log(`User ${userId} disconnected`);
  });
});


const listenForNotifications = async () => {
  const dbClient = await pool.connect();
  await dbClient.query("LISTEN new_notification");
  dbClient.on("notification", (msg) => {
    const notification = JSON.parse(msg.payload);
    const userSocket = users.get(String(notification.userId));
    if (userSocket) {
      userSocket.send(JSON.stringify(notification));
    }
  });
};
listenForNotifications();
export { wss };
