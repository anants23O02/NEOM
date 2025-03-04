import {generateJWT} from "../../utils/generateJWT.js";
import pool from "../../config/db.js";
import bcrypt from "bcrypt"


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
    const encryptedPwd = await bcrypt.hash(password,10);
    const userCheck = await pool.query("SELECT * FROM users WHERE email = $1",[email]);
    if (userCheck.rows.length === 0) {
        const query = `INSERT INTO users (profilepic, firstname, lastname, email,phoneno,birthday,googleid,password) 
        VALUES ($1, $2, $3, $4,$5,$6,$7,$8) 
        RETURNING *;`
        const values = [picture,firstName,lastName,email,phoneNo,birthday,2,encryptedPwd]
        const results = await pool.query(query,values);
        const user = results.rows[0]
        const token = generateJWT(user);
        res.cookie("token",token,{httpOnly:true});
    }

    return res.status(200).json({redirect:'/signIn',sucess:"created User"});
}