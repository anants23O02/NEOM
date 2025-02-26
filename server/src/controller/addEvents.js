import pool from "../config/db.js";

export const addEvents = async (req, res) => {
  try {
    console.log("req.body:", req.body); // Debugging incoming request body

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
      picture, // Ensure this is coming from middleware
    } = req.body;

    if (!picture) return res.status(400).json({ error: "No image uploaded" });

    const jsonImages = JSON.stringify(picture);
    const jsonEventDesc = JSON.stringify(event_desc);

    const query = `
      INSERT INTO events 
      (title, stars, reviews, city, country, images, event_type_id, about_location_id, user_experience_id, start_date, end_date, category, event_desc)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *;
    `;

    const values = [
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
      jsonEventDesc,
    ];

    const results = await pool.query(query, values);
    return res.status(201).json({ user: results.rows[0], redirect: "admin" });

  } catch (error) {
    console.error("Database Error:", error); // Log error for debugging
    return res.status(500).json({ error: "failed last" });
  }
};
