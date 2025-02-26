import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import pool from "../config/db.js";

export const registerAccount = async (req,res) => {
    console.log('here :>> ',req.body);
    const {
        firstName,
    lastName,
    email,
    phoneNo,
    birthday,
    password,
    picture,
    } = req.body;
    const userCheck = await pool.query("SELECT * FROM users WHERE email = $1",[email]);
    if (userCheck.rows.length === 0) {
        const query = `INSERT INTO users (profilepic, firstname, lastname, email,phoneno,birthday,googleid) 
        VALUES ($1, $2, $3, $4,$5,$6,$7) 
        RETURNING *;`
        const values = [picture,firstName,lastName,email,phoneNo,birthday,2]
        const results = await pool.query(query,values);
        const user = results.rows[0]
        const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.cookie("token",token,{httpOnly:true});
    }

    return res.status(200).json({redirect:'/signIn',sucess:"created User"});
}