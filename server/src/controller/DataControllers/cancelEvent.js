import pool from "../../config/db.js"
export const cancelEvent = async (req, res) => {
  try {
    const { id } = req.query;
    console.log('id :>> ', id);
    const query = `DELETE FROM user_events WHERE event_id = $1 RETURNING *;`;
    const values = [Number(id)];
    const result = await pool.query(query, values);
    // console.log(result.rows[0],values[0],"here")
    res.status(201).json({ message: "good" });
  } catch (err) {
    res.json({ error: err.message });
  }
};
