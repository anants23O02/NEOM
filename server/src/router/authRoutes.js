 import express from "express";
import {googleRedirect,googleCallBack} from "../controller/AuthControllers/authController.js"
import {userAccount} from "../controller/AuthControllers/userAccount.js";
import {verifyJWTMiddleware} from "../middleware/verifyJWT.js"
import {uploadImage} from "../middleware/cloudinaryMiddleware.js";
import {registerAccount} from "../controller/AuthControllers/registerAccount.js";
import {giveaccount} from "../controller/AuthControllers/sendAccountData.js"
import {verifyaccount} from "../controller/AuthControllers/loginUser.js";

const Router = express.Router();

Router.get("/google",googleRedirect);
Router.get("/google/callback", googleCallBack);
Router.get("/google/user",verifyJWTMiddleware,userAccount);
Router.post("/signUp",uploadImage,registerAccount);
Router.get("/signIn",verifyJWTMiddleware,giveaccount);
Router.post("/login",verifyaccount);
export default Router ;