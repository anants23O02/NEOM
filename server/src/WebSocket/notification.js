import { WebSocketServer } from "ws";
import pool from "../config/db.js"; // PostgreSQL connection

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected to WebSocket");

  ws.send(JSON.stringify({ message: "WebSocket connection established" }));
});

const listenForNotifications = async () => {
  const client = await pool.connect();
  await client.query("LISTEN new_notification");

  client.on("notification", (msg) => {
    console.log("Received notification:", msg.payload);
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(msg.payload);
      }
    });
  });

  console.log("Listening for PostgreSQL notifications...");
};

listenForNotifications();

export { wss };
