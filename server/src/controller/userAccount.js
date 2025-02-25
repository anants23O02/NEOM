import pool from "../config/db.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const userAccount = async (req, res) => {
  try {
    const { sub, picture, given_name, family_name, email } = req.user;

    const userCheck = await pool.query(
      "SELECT * FROM users WHERE googleid = $1",
      [sub]
    );

    if (userCheck.rows.length === 0) {
      const uploadResponse = await cloudinary.v2.uploader.upload(picture, {
        folder: "profiles",
      });

      const cloudinaryUrl = uploadResponse.secure_url;

      const query = `
        INSERT INTO users (googleid, profilepic, firstname, lastname, email) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *;
      `;
      const values = [sub, cloudinaryUrl, given_name, family_name, email];
      const result = await pool.query(query, values);

      return res.status(201).json({ user: result.rows[0] });
    }

    return res.status(200).json({ user: userCheck.rows[0] });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
