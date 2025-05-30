import pool from "../../config/db.js"

export const sendEvents = async (req,res) => {
    const query = `SELECT * FROM events`
    const events = await pool.query(query);
    return res.status(201).json({events: events.rows});
}