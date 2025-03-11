import pool from "../../config/db.js"

export const removeEventFavorite = async (req, res) => {
    console.log("Received request:", req.body); // Debugging
    console.log("Deleting event_id:", req.body.eventid, "for user_id:", req.body.userid);
    const query = `DELETE FROM favorite_events WHERE user_id = $1 AND event_id = $2`;
    const values = [req.body.userid, req.body.eventid];

    try { 
        const results = await pool.query(query, values);
        if (results.rowCount === 0) {
            return res.status(404).json({ success: false, message: "No matching event found to delete" });
        }
        return res.json({ success: true, message: "Event removed from favorites" });
    } catch (error) {
        console.error("Error deleting event:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
