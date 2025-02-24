import express from "express";
import {addEvents} from "../controller/addEvents.js";
import upload from "../middleware/cloudinaryMiddleware.js";
const Router = express.Router();

Router.post("/add-event",upload.single("images"),addEvents);

export default Router;