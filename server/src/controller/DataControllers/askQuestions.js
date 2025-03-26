import pool from "../../config/db.js";

export const askQuestions = async (req,res) => {
    const {userid} = req.query;
    console.log('userid :>> ', userid);
    const query = `SELECT * FROM ask_reviews WHERE user_id = $1;`
    const values = [userid];
    const result  = await pool.query(query,values);
    res.json({questions:result.rows});
}