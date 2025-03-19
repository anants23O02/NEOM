import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const verifyJWTMiddleware = (req, res,next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  
  // console.log('token :>> ', token, process.env.JWT_SECRET);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userData = decoded.user;
    req.body = userData;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(403).json({ error: "Invalid token" });
  }
};
