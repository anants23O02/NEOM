import { ReviewIcon } from "../ReviewIcon/ReviewIcon";
import image from "../../assets/img/mountain.jpg";
import styles from "../../styles/feedback.module.css";
import TruncatedText from "../../utils/TruncatedText";
import { ConvertDate } from "../../utils/DateValue";
import { useState } from "react";
import { ReviewModal } from "../ReviewModal/ReviewModal";
import StarIcon from "@mui/icons-material/Star";
export const FeedbackElement: React.FC = ({
  card,
  index,
  date,
  review,
  userName,
  userid,
  event_id
}) => {
  const attendedDate = ConvertDate(new Date(date));
  const startDate = ConvertDate(new Date(card.start_date));
  const endDate = ConvertDate(new Date(card.end_date));
  const [Open, setOpen] = useState(false);
  console.log("attendedDate :>> ", attendedDate);
  const ReviewHeading = ["Overwhelming", "Great", "Boring", "Okay", "Bad"];
  return (
    <>
      <ReviewModal isOpen={Open} onClose={setOpen} userName={userName} event_id={event_id} user_id={userid} />
      <div className={styles.feedbackCard}>
        <div className={styles.cardImage}>
          <img src={card.images} alt="" />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayHeading}>
              {TruncatedText(card.title, 3)}
            </div>
            <div className={styles.overlayDate}>
              {startDate[1] === endDate[1]
                ? `${startDate[1]} ${startDate[2]} - ${endDate[2]}`
                : `${startDate[1]} ${startDate[2]} - ${endDate[1]} ${endDate[2]}`}
            </div>
            <div className={styles.overlayReviews}>
              <div className={styles.overlayReviewNumber}>
               {`${card.reviews}`} Reviews
              </div>
              <div className={styles.overlayReviewValue}>
              {index > 0 && <StarIcon style={{ color: "gold",fontSize:"1rem" }} />} {index > 0 ? index : ""}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardContent}>
          <div className={styles.contentDate}>
            {`${attendedDate[1]} ${attendedDate[2]}, ${attendedDate[0]}`}
          </div>
          {index > 0 && (
            <>
              {" "}
              <div className={styles.contentHeading}>
                {`${ReviewHeading[5 - index]}`} Experience
              </div>
              <div className={styles.contentDescription}>{`${review}`}</div>
            </>
          )}

          <div className={styles.contentReview}>
            {index > 0 ? (
              <ReviewIcon value={index} />
            ) : (
              <>
                <div className={styles.contentHeading}>
                    {`Hey ${userName}, you haven't added your feedback yet, Please share your experience with us serve you better next time.`}
                </div>
                <button
                  className={styles.reviewButton}
                  onClick={() => setOpen(true)}
                >
                  Add a Review
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
