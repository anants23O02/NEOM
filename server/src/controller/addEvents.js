import pool from "../config/db.js";

export const addEvents = async (req, res) => {
  console.log("req.body.images :>> ", req.body);
  const query = `INSERT INTO events (title,stars,reviews,city,country,images,event_type_id,about_location_id,user_experience_id,start_date,end_date,category,event_desc)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
    RETURNING *;
    `;
  const {
    title,
    stars,
    reviews,
    city,
    country,
    event_type_id,
    about_location_id,
    user_experience_id,
    start_date,
    end_date,
    category,
    event_desc,
  } = req.body;

  if(req.file){
    console.log('req.file.path :>> ', req.file.path);
  }
  const jsonImages = JSON.stringify(req.file.path);
  const jsonEvent_desc = JSON.stringify(event_desc);
  const value = [
    title,
    stars,
    reviews,
    city,
    country,
    jsonImages,
    event_type_id,
    about_location_id,
    user_experience_id,
    start_date,
    end_date,
    category,
    jsonEvent_desc,
  ];
  const results = await pool.query(query, value);
  
  return res.status(201).json({ user: results.rows[0], redirect: "admin" });

};
