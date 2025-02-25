import pool from "../config/db.js";

export const addEventType = async (req, res) => {
    const query = `INSERT INTO event_types (event_name,event_description)
    VALUES ($1,$2) 
    RETURNING *;`;
    console.log('req.body :>> ', req.body);
    console.log('req.body.eventName :>> ', req.body.eventName);
    const values = [req.body.eventName,req.body.eventDescription];
    const results = await pool.query(query,values)
    return res.status(201).json({redirect:"admin"})
}