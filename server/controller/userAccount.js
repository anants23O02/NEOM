import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();


export const confirmUser = (req,res) => {
    console.log('here :>> ');
    const token = req.cookies.token;
    console.log('token :>> ', token);
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    res.json(decoded.user);
}