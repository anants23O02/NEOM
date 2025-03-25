import express from "express";
import {sendEvents} from "../controller/DataControllers/sendEvents.js";
import {addEventSchedule} from "../controller/DataControllers/addEventSchedule.js";
import {addEventFavorite} from "../controller/DataControllers/addEventFavorite.js";
import {removeEventFavorite} from "../controller/DataControllers/removeEventFavorite.js";
import {editProfile} from "../controller/DataControllers/editProfile.js";
import {uploadImage} from "../middleware/cloudinaryMiddleware.js";
import { sendUserData } from "../controller/DataControllers/userData.js";
import { rescheduleEvent } from "../controller/DataControllers/rescheduleEventDB.js";
import {askQuestions} from "../controller/DataControllers/askQuestions.js";
import {myapi} from "../controller/DataControllers/myapi.js";
const Router = express.Router();

Router.get("/events",sendEvents);
Router.post("/addEvent",addEventSchedule);
Router.post("/addFavorite",addEventFavorite)
Router.delete("/remove-favorite",removeEventFavorite);
Router.patch("/edit-profile",uploadImage({ required: false }),editProfile);
Router.get("/user-data",sendUserData);
Router.patch("/reschedule-event",rescheduleEvent);
Router.get("/ask-questions",askQuestions)
// Router.get("/myapi",myapi)

// Router.get("/dome", async(req,res) =>{
//     let cost = 120;
//     for(let i = 21;i<=28;i++){
//         const value = [cost,i]
//         const query = `UPDATE events SET cost = $1 WHERE id = $2;`
//         const result = await pool.query(query,value);
//         cost = cost + 30;
//         // res.json(result.row)
//     }
// } )


export default Router;


//     const query = `ALTER TABLE events ADD COLUMN seats INTEGER DEFAULT 0;`
//     const result = await pool.query(query,[])

