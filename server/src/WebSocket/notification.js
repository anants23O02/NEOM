import { WebSocketServer } from "ws";
import pool from "../config/db.js"; 

const wss = new WebSocketServer({ port: 8080 });
const users = new Map(); 

wss.on("connection", (ws, req) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const userId = String(url.searchParams.get("userId"));

    if (!userId) {
      console.log("User ID missing, closing socket.");
      // ws.close();
      return;
    }

    // Close any existing connection for the same user
    // if (users.has(userId)) {
    //   users.get(userId).close();
    //   users.delete(userId);
    // }

    users.set(userId, ws);
    console.log(`User ${userId} connected to WebSocket`);  
    ws.on("error", (err) => console.error(`WebSocket error for user ${userId}:`, err));

    // ws.on("close", () => {
    //   users.delete(userId);
    //   console.log(`User ${userId} disconnected`);
    // });

    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify({ message: "WebSocket connection established" }));
    }
  } catch (error) {
    console.error("WebSocket connection error:", error);
    // ws.close();
  }
});

const listenForNotifications = async () => {
  try {
    const client = await pool.connect();
    await client.query("LISTEN new_notification"); 
    client.on("notification", (msg) => {
      console.log("Received notification:", msg.payload);
      const notification = JSON.parse(msg.payload);
      const userId = String(notification.user_id);
      console.log("Active WebSocket users:", Array.from(users.keys()));

      const userSocket = users.get(userId);
      if (userSocket && userSocket.readyState === WebSocket.OPEN) {
        console.log(`Sending notification to user ${userId}`);
        userSocket.send(JSON.stringify(notification));
      } else {
        console.log(`User ${userId} is not connected`);
      }
    });
  } catch (error) {
    console.error("Error in listenForNotifications:", error);
  }
};

listenForNotifications();
export { wss };
