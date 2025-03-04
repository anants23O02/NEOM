import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import axios from "axios";

// import dotenv from "dotenv";
dotenv.config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:5000/auth/google/callback";

export const googleRedirect = (req,res) => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email profile&access_type=offline`;
    res.redirect(authUrl);
};

export const googleCallBack = async (req,res) => {
    const code = req.query.code;
    try {
        const tokenRes = await axios.post("https://oauth2.googleapis.com/token",{
            client_id:CLIENT_ID,
            client_secret:CLIENT_SECRET,
            redirect_uri:REDIRECT_URI,
            grant_type:"authorization_code",
            code
        });

        const {access_token,id_token} = tokenRes.data;
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
        const user = userRes.data
        // console.log('user :>> ', user);
        
        const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.cookie("token",token,{httpOnly:true});
        res.redirect("http://localhost:5173/setUser");
    }
    catch(error){
        console.log('error :>> ', error);
    }
}