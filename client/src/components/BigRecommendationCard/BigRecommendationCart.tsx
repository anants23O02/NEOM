import styles from '../../styles/BigRecommendationCard.module.css'
import review from "../../assets/img/overwhelmed.svg";
import type {BigRecommendationCardImages} from '../../assets/Dummydata/LocationCardInterface'

export const BigRecommendationCard: React.FC<BigRecommendationCardImages> = ({data}) => {
  return (
    <div className={styles.BigRecommend}>
      <div className={styles.CardPoster}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.gradientOverlay}></div>

      <div className={styles.CardContent}>
        <div className={styles.CardContentHeading}>{data.title}</div>
        <div className={styles.CardContentText}>
          <div className={styles.CardContentPara}>
            <p>From Nov 10 to 29 2025</p>
            <p>10:30 AM - 7:30 PM</p>
          </div>
          <div className={styles.CardContentReview}>
            <img src={review} alt="" />
            <p>Overwhelmed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
