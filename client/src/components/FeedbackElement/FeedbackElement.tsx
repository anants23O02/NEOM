import { ReviewIcon } from "../ReviewIcon/ReviewIcon";
import image from "../../assets/img/mountain.jpg";
import styles from "../../styles/feedback.module.css"
import TruncatedText from "../../utils/TruncatedText"
export const FeedbackElement: React.FC = ({card,value,index}) => {
  return (
    <>
      <div className={styles.feedbackCard}>
        <div className={styles.cardImage}>
          <img src={card.images[0]} alt="" />
          <div className={styles.imageOverlay}>
              <div className={styles.overlayHeading}>
                  {TruncatedText(card.title,3)}
              </div>
              <div className={styles.overlayDate}>
                  Nov 10-29, 2025
              </div>
              <div className={styles.overlayReviews}>
                <div className={styles.overlayReviewNumber}>
                    123 Reviews
                </div>
                <div className={styles.overlayReviewValue}>
                      {index >0 ? 6-index:''}
                </div>
              </div>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.contentDate}>
            Nov 17,2022</div>
          <div className={styles.contentHeading}>
            Great Experience</div>
          <div className={styles.contentDescription}>
            Anim occaecat esse est pariatur excepteur aliquip. Mollit duis est
            ullamco enim sint voluptate consectetur. Do ad cillum nulla pariatur
            enim ipsum veniam Lorem et ipsum in non proident ad.Anim occaecat esse est pariatur excepteur aliquip. Mollit duis est
            ullamco enim sint voluptate consectetur. Do ad cillum nulla pariatur
            enim ipsum veniam Lorem et ipsum in non proident ad.
          </div>
          <div className={styles.contentReview}>
            {
            index > 0 ? <ReviewIcon value={index}  /> : (
              <button className={styles.reviewButton}>
                Add a Review
              </button>
            )
            }
          </div>
        </div>
      </div>
    </>
  );
};
