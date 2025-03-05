import express from "express";
import {sendEvents} from "../controller/DataControllers/sendEvents.js";
import {addEventSchedule} from "../controller/DataControllers/addEventSchedule.js";
import {addEventFavorite} from "../controller/DataControllers/addEventFavorite.js";
import {removeEventFavorite} from "../controller/DataControllers/removeEventFavorite.js";


const Router = express.Router();

Router.get("/events",sendEvents);
Router.post("/addEvent",addEventSchedule);
Router.post("/addFavorite",addEventFavorite)
Router.delete("/remove-favorite",removeEventFavorite);
export default Router;