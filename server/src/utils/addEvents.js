import pool from "../config/db.js";

export const addEvents = async (req,res) => {
    console.log('req.body :>> ', req.body);
    const query = `INSERT INTO events (title,stars,reviews,city,country,images,event_type_id,about_location_id,user_experience_id,start_date,end_date,category,event_desc)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
    RETURNING *;
    `;
}