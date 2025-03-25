import { WebSocketServer } from "ws";
import pool from "../config/db.js"; 

const WS_PORT = 3000; 
const clients = new Map();
const wss = new WebSocketServer({ port: WS_PORT }); 

wss.on('connection', (ws, req) => {
  const userId = new URL(req.url, `http://${req.headers.host}`).searchParams.get('userId');

  if (!userId) {
    ws.close();
    return;
  }

  console.log(`User ${userId} connected`);
  clients.set(userId, ws);

  ws.on('close', () => {
    console.log(`User ${userId} disconnected`);
    clients.delete(userId);
  });
});

const pgclient = await pool.connect();
await pgclient.query("LISTEN new_notification"); 

pgclient.on('notification', (msg) => {
  if (msg.channel === 'new_notification') {
    try {
      const payload = JSON.parse(msg.payload);
      const { user_id } = payload;
      const client = clients.get(String(user_id));
      if (client && client.readyState === client.OPEN) {
        console.log(`Sending notification to user ${user_id}`);
        client.send(JSON.stringify(payload));
      } else {
        console.log(`User ${user_id} not connected`);
      }
    } catch (error) {
      console.error('Failed to parse notification payload', error);
    }
  }
});

export { wss };
