import pool from "../config/db.js";

export const userAccount = async (req, res) => {
    try {
        const { sub, picture, given_name, family_name, email } = req.user;

        // Check if user exists
        const userCheck = await pool.query('SELECT * FROM users WHERE googleid = $1', [sub]);

        if (userCheck.rows.length === 0) {  
            const query = `
                INSERT INTO users (googleid, profilepic, firstname, lastname, email) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING *;
            `;
            const values = [sub, picture, given_name, family_name, email];
            const result = await pool.query(query, values);

            console.log('New User Added:', result.rows[0]);
            return res.status(201).json({ user: result.rows[0] }); 
        } 

        console.log('User Already Exists:', userCheck.rows[0]);
        return res.status(200).json({ user: userCheck.rows[0] });  

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
