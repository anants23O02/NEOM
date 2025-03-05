import pool from "../../config/db.js";

export const addEventFavorite = async (req,res) => {
    console.log('req.body.eventid,req.body.userid :>> ', req.body.eventid,req.body.userid);
    const query = `INSERT INTO favorite_events (user_id,event_id) VALUES ($1,$2)`
    const values = [req.body.userid,req.body.eventid]
    const result = await pool.query(query,values);
    return res.json({result})
}