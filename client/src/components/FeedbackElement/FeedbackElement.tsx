import { ReviewIcon } from "../ReviewIcon/ReviewIcon";
import image from "../../assets/img/mountain.jpg";
import styles from "../../styles/feedback.module.css"
export const FeedbackElement: React.FC = () => {
  return (
    <>
      <div className={styles.feedbackCard}>
        <div className={styles.cardImage}>
          <img src={image} alt="" />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.contentDate}>
            Nov 17,2022</div>
          <div className="sectionHeading">
            Great Experience</div>
          <div className={styles.contentDescription}>
            Anim occaecat esse est pariatur excepteur aliquip. Mollit duis est
            ullamco enim sint voluptate consectetur. Do ad cillum nulla pariatur
            enim ipsum veniam Lorem et ipsum in non proident ad.
          </div>
          <div className={styles.contentReview}>
            <ReviewIcon value={3} />
          </div>
        </div>
      </div>
    </>
  );
};
