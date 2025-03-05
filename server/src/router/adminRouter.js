import express from "express";
import {addEvents} from "../controller/AdminControllers/addEvents.js";
import {addEventType} from "../controller/AdminControllers/addEventType.js"
import {uploadImage} from "../middleware/cloudinaryMiddleware.js";
import {addNotification} from "../controller/AdminControllers/rescheduleEvent.js"
import {allusers} from "../controller/AdminControllers/allusers.js"
const Router = express.Router();
Router.post("/add-event",uploadImage,addEvents);
Router.post("/add-event-type",addEventType);
Router.post("/add-notification",addNotification);
Router.get("/allusers",allusers);
export default Router;