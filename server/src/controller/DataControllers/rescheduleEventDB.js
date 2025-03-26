import pool from "../../config/db.js";

export const rescheduleEvent = async (req, res) => {
  try {
    console.log("API called");

    const query = `
      UPDATE user_events
      SET event_date = $1
      WHERE event_id = $2;
    `;

    const values = [req.body.rescDate, req.body.eventid];

    const result = await pool.query(query, values); 

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Event not found" }); 
    }

    console.log("Updated event:", result);
    return res.status(200).json({ message: "Event rescheduled successfully" });
  } catch (error) {
    console.error("Database update error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
