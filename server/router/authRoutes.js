import express from "express";
import {googleRedirect,googleCallBack} from "../controller/authController.js"
const Router = express.Router();

Router.get("/google",googleRedirect);
Router.get("/google/callback", googleCallBack);
export default Router ;