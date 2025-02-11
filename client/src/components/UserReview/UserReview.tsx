import { MdStar } from "react-icons/md";
import styles from "../../styles/UserReview.module.css";
import style2 from "../../styles/eventpage.module.css";
import TruncatedText from '../../utils/TruncatedText';
import type {userReviews} from '../../assets/LocationCardsInterface.ts';

export const UserReview: React.FC<userReviews> = ({ data }) => {
  return (
    <div className={styles.Review}>
      <div className={styles.reviewHeader}>
        <div className={styles.userProfilePic}>
          <img src={data.image} alt="no image" />
        </div>
        <div className={styles.userDetails}>
          <h4>{data.name}</h4>
          <div>{data.date}</div>
        </div>
      </div>
      <div className={styles.reviewContent}>{TruncatedText(data.review,30)}</div>
      <div className={styles.reviewStars}>
        <div className={style2.headingstars}>
          {[...Array(5)].map((_, i) => {
            return (
              <div className={style2.stars}>
                <MdStar key={i} className={style2.cardStars} />
              </div>
            );
          })}
          <span>5.0</span>
        </div>
        <div className={styles.readMore}>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};
