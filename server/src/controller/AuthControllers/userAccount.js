import pool from "../../config/db.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const userAccount = async (req, res) => {
  if (req.body.sub) {
    try {
      console.log("req.body.googleid :>> ", req.body.googleid);
      const { sub, picture, given_name, family_name, email } = req.body;
      const userCheck = await pool.query(
        "SELECT * FROM users WHERE googleid = $1",
        [sub]
      );
      console.log("userCheck.rows :>> ", userCheck.rows);

      if (userCheck.rows.length === 0) {
        const uploadResponse = await cloudinary.v2.uploader.upload(picture, {
          folder: "profiles",
        });
        const cloudinaryUrl = uploadResponse.secure_url;

        const query = `
        INSERT INTO users (googleid, profilepic, firstname, lastname, email) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *;`;
        const values = [sub, cloudinaryUrl, given_name, family_name, email];
        const result = await pool.query(query, values);

        return res.status(201).json({ user: result.rows[0] });
      }

      const cardsQuery = `SELECT ARRAY_AGG(event_id) AS event_ids FROM favorite_events WHERE user_id = $1`;
      const userID = userCheck.rows[0].userid;
      const fav_events = await pool.query(cardsQuery, [userID]);

      const eventsQuery = ` SELECT JSON_AGG(
      JSON_BUILD_OBJECT(
      'event_id', event_id, 
      'status', status, 
      'event_date', event_date
       )
       ) AS events
      FROM user_events
      WHERE user_id = $1;`;
      const user_events = await pool.query(eventsQuery, [userID]);

      return res.status(200).json({
        user: userCheck.rows[0],
        fav_events: fav_events.rows[0].event_ids,
        user_events: user_events.rows[0].events,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.body.googleid === 2) {
    console.log("here handling login ");
  }
};
