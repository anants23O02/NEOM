import pool from "../../config/db.js";

export const addEventSchedule = async (req,res) => {
    console.log('req.body :>> ', req.body);
    const value = [req.body.user,req.body.event,"scheduled",req.body.date,req.body.guests]
    const query = `INSERT INTO user_events (user_id,event_id,status,event_date,guests) VALUES ($1,$2,$3,$4,$5)`
    const result = await pool.query(query,value)
    console.log('result :>> ', result);
    return res.json({redirect:"/fetching"})
}