import pool from "../../config/db.js";

export const addEventSchedule = async (req,res) => {
    const value = [req.body.eventid,27,"scheduled","2025-02-25 14:00:07.556"]
    const query = `INSERT INTO user_events (user_id,event_id,status,event_date) VALUES ($1,$2,$3,$4)`
    const result = await pool.query(query,value)
    console.log('result :>> ', result);
    return res.json({redirect:"/fetching"})
}