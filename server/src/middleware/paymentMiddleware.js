import pool from "../config/db.js";

export const paymentMiddleware = async(req,res,next) => {
    const eventId = req.body.event;
    const userId = req.body.user;
        
    console.log('eventId :>> ', eventId,userId);
    next();
}
