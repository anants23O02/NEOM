import express from "express";
import {googleRedirect,googleCallBack} from "../controller/authController.js"
import {userAccount} from "../controller/userAccount.js";
import {authGoogleMiddleware} from "../middleware/authGoogleMiddleware.js"
import {uploadImage} from "../middleware/cloudinaryMiddleware.js";
import {registerAccount} from "../controller/registerAccount.js";
const Router = express.Router();

Router.get("/google",googleRedirect);
Router.get("/google/callback", googleCallBack);
Router.get("/google/user",authGoogleMiddleware,userAccount);
Router.post("/signUp",uploadImage,registerAccount);
export default Router ;