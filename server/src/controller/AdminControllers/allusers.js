import pool from "../../config/db.js";

export const allusers = async (req, res) => {
    try {
        const query = `SELECT userid FROM users`;
        const results = await pool.query(query);

        console.log('Results:', results.rows); 

        return res.status(200).json({ users: results.rows });  
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
