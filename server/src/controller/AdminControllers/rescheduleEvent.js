 export const addNotification = async (req,res) => {
    const query = `INSERT INTO notifications (user_id,event_id) VALUES ($1,$2);`
    const values = [req.body.userid,req.body.eventid]
    const results = await pool.query(query,values);
    return res.json({message:"send notification"});
}