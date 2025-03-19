
import pool from "../../config/db.js";
import bcrypt from "bcrypt";
import {generateJWT} from "../../utils/generateJWT.js"

export const verifyaccount = async (req,res) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const values = [req.body.email];
    const user = await pool.query(query,values);
    const match = await bcrypt.compare(req.body.password, user.rows[0].password);

    // console.log('user :>> ', user.rows[0]);
    if (!match) {
        if (!match) return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = generateJWT(user.rows[0])
    return res.json({ message: "Login successful", token });
}