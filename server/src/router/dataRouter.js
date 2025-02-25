import express from "express";
import {sendEvents} from "../controller/sendEvents.js";

const Router = express.Router();

Router.get("/events",sendEvents);

export default Router;