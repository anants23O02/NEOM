import { DynamicCardImage } from "../DynamicCardImage/DynamicCardImage";
import styles from "../../styles/recommendCard.module.css";
import logo from '../../assets/img/joy.svg';
import TruncatedText from '../../utils/TruncatedText'
export const RecommendCard: React.FC = ({value,data}) => {
  const overlay = data.pos;
  return (
    <>
    
      <div className={styles.recommendCard}>
        <DynamicCardImage image = {value.images[0]} type={'top5'} overlay={overlay} />
        <div className={styles.recommendCardContent}>
          <div className={styles.label}>
            <div className={styles.review}>
              <img src={logo} alt="" />
              <span>Invigorting and Uplifting</span>
            </div>
            <div className={styles.date}>Nov 10 - 29</div>
          </div>
          <div className={styles.title}>{TruncatedText(value.title,3)}</div>
          <div className={styles.time}>10:30 AM - 7:30 PM</div>
        </div>
      </div>
    </>
  );
};
