import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
    const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"7d"});
    console.log('token :>> ', token);
    return token;
}