import pool from "../../config/db.js";

export const editProfile = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    date,
    activities,
    picture,
    userid,
  } = req.body;
  const pgArray = `{"${activities
    .split(",")
    .map((s) => s.trim().replace(/^"+|"+$/g, ""))
    .join('","')}"}`;
  console.log("picture :>> ", picture);
  try {
    const query = `UPDATE users 
    SET firstname = $1, lastname = $2, email = $3, phoneno = $4, 
        birthday = $5, activities = $6, 
        profilepic = COALESCE(NULLIF($7, ''), profilepic)
    WHERE userid = $8;`;

    const values = [
      firstname,
      lastname,
      email,
      phone,
      date,
      pgArray,
      picture,
      userid,
    ];
    const results = await pool.query(query, values);
    console.log("results.rows[0] :>> ", results.rows[0]);
    res.status(200).json({ message: picture });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
