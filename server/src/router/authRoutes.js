 import express from "express";
import {googleRedirect,googleCallBack} from "../controller/AuthControllers/authController.js"
import {userAccount} from "../controller/AuthControllers/userAccount.js";
import {verifyJWTMiddleware} from "../middleware/verifyJWT.js"
import {uploadImage} from "../middleware/cloudinaryMiddleware.js";
import {registerAccount} from "../controller/AuthControllers/registerAccount.js";
import {giveaccount} from "../controller/AuthControllers/sendAccountData.js"
import {verifyaccount} from "../controller/AuthControllers/loginUser.js";
import {logout} from "../controller/AuthControllers/logout.js";
const Router = express.Router();

Router.get("/google",googleRedirect);
Router.get("/google/callback", googleCallBack);
Router.get("/google/user",verifyJWTMiddleware,userAccount);
Router.post("/signUp",uploadImage({ required: true }),registerAccount);
Router.get("/signIn",verifyJWTMiddleware,giveaccount);  
Router.post("/login",verifyaccount);//login with email and password
Router.post("/logout",logout);
export default Router ;