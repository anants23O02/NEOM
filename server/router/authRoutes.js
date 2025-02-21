import express from "express";
import {googleRedirect,googleCallBack} from "../controller/authController.js"
import {confirmUser} from "../controller/userAccount.js";

const Router = express.Router();

Router.get("/google",googleRedirect);
Router.get("/google/callback", googleCallBack);
Router.get("/user",confirmUser);
export default Router ;