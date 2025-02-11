import { DynamicCardImage } from "../DynamicCardImage/DynamicCardImage";
import styles from "../../styles/recommendCard.module.css";
import logo from "../../assets/img/joy.svg";
import TruncatedText from "../../utils/TruncatedText";
import type { locationCards } from "../../assets/LocationCardsInterface";
import type { RecommendCards } from "../../assets/LocationCardsInterface";
interface props {
  value: locationCards;
  data: RecommendCards;
  type: string;
}

export const RecommendCard: React.FC<props> = ({ value, data, type }) => {
  let overlay;
  if (data) {
    overlay = data.pos;
  }

  return (
    <>
      <div className={styles.recommendCard}>
        <DynamicCardImage
          image={value.images[0]}
          type={type}
          overlay={overlay}
        />
        <div className={styles.recommendCardContent}>
          <div className={styles.label}>
            <div className={styles.review}>
              <img src={logo} alt="" />
              <span>Invigorting and Uplifting</span>
            </div>
            <div className={styles.date}>Nov 10 - 29</div>
          </div>
          <div className={styles.title}>{TruncatedText(value.title, 3)}</div>
          <div className={styles.time}>10:30 AM - 7:30 PM</div>
        </div>
      </div>
    </>
  );
};
