import pool from "../config/db.js";

export const paymentMiddleware = async(req,res,next) => {
    const eventId = req.body.event;
    const userId = req.body.user;
    const query = `SELECT cost FROM events WHERE id = $1;`   
    const value = [eventId];
    const result = 
    console.log('eventId :>> ', eventId,userId);
    next();
}
