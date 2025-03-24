import pool from "../../config/db.js"

export const giveaccount = async (req,res) => {
    console.log('req.body :>> ', req.body);
    const cardsQuery = `SELECT ARRAY_AGG(event_id) AS event_ids FROM favorite_events WHERE user_id = $1`;
      const userID = req.body.userid;
      const fav_events = await pool.query(cardsQuery, [userID]);
      const eventsQuery = ` SELECT JSON_AGG(
      JSON_BUILD_OBJECT(
      'event_id', event_id, 
      'status', status, 
      'event_date', event_date,
      'guests',guests
       )
       ) AS events
      FROM user_events
      WHERE user_id = $1;`;
      const user_events = await pool.query(eventsQuery, [userID]);

      const reviewsQuery = `SELECT * FROM user_reviews WHERE userid = $1;`
      const reviewValues = [userID];
      const userReviews = await pool.query(reviewsQuery,reviewValues);
      console.log('userReviews :>> ', userReviews);
      console.log('user_events.rows[0].events :>> ', user_events.rows[0].events);
      return res.status(200).json({
        user: req.body,
        fav_events: fav_events.rows[0].event_ids,
        user_events:  user_events.rows[0].events, 
        user_reviews: userReviews.rows[0],
      });
    

    }