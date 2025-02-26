import express from "express";
import {addEvents} from "../controller/addEvents.js";
import {addEventType} from "../controller/addEventType.js"
import {uploadImage} from "../middleware/cloudinaryMiddleware.js";
const Router = express.Router();

// Router.post("/add-event",upload.single("images"),addEvents);
Router.post("/add-event",uploadImage,addEvents);
Router.post("/add-event-type",addEventType)
export default Router;