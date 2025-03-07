import { WebSocketServer } from "ws";
import pool from "../config/db.js"; // PostgreSQL connection

const wss = new WebSocketServer({ port: 8080 });
const users = new Map(); // Store userId -> WebSocket mapping

wss.on("connection", (ws, req) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const userId = String(url.searchParams.get("userId")); // Ensure userId is string

    if (userId) {
      users.set(userId, ws);
      console.log(`User ${userId} connected to WebSocket`);
    } else {
      console.log("User ID missing, closing socket.");
      ws.close();
      return;
    }

    ws.on("close", () => {
      users.delete(userId);
      console.log(`User ${userId} disconnected`);
    });

    ws.send(JSON.stringify({ message: "WebSocket connection established" }));
  } catch (error) {
    console.error("WebSocket connection error:", error);
    ws.close();
  }
});

const listenForNotifications = async () => {
  const client = await pool.connect();
  await client.query("LISTEN new_notification");

  client.on("notification", (msg) => {
    console.log("Received notification:", msg.payload);

    const notification = JSON.parse(msg.payload);
    const userId = String(notification.user_id); // Convert to string for consistency

    console.log("Active WebSocket users:", Array.from(users.keys()));

    const userSocket = users.get(userId); // Get specific user's WebSocket

    if (userSocket && userSocket.readyState === 1) {
      console.log(`Sending notification to user ${userId}`);
      userSocket.send(JSON.stringify(notification)); // Send notification only to the correct user
    } else {
      console.log(`User ${userId} is not connected`);
    }
  });

  console.log("Listening for PostgreSQL notifications...");
};

listenForNotifications();
export { wss };
