import pool from "../../config/db.js";
export const addNotification = async (req, res) => {
    try {
        if (!req.body?.formData?.user || !req.body?.formData?.event || !req.body?.formData?.date) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const query = `INSERT INTO notifications (user_id, event_id, rescheduled_date) VALUES ($1, $2, $3);`;
        const values = [req.body.formData.user, req.body.formData.event, req.body.formData.date];

        await pool.query(query, values);
        console.log("Notification added:", req.body);
        return res.status(201).json({ message: "Notification sent" });
        
    } catch (error) {
        console.error("Error adding notification:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
