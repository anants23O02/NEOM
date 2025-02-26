import express from "express";
import {sendEvents} from "../controller/DataControllers/sendEvents.js";

const Router = express.Router();

Router.get("/events",sendEvents);

export default Router;