import express from "express";
import {googleRedirect,googleCallBack} from "../controller/authController.js"
import {userAccount} from "../controller/userAccount.js";
import {authGoogleMiddleware} from "../middleware/authGoogleMiddleware.js"
const Router = express.Router();

Router.get("/google",googleRedirect);
Router.get("/google/callback", googleCallBack);
Router.get("/google/user",authGoogleMiddleware,userAccount);
export default Router ;