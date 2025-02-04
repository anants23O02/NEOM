import poster from "../../assets/img/golf.jpg";
import satisfied from '../../assets/img/appreciation.svg'
import styles from "./HorizontalCard.module.css";
import { MdCalendarToday } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";

export const HorizontalCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardPoster}>
        <img src={poster} alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeading}>Round of Golf</div>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <MdStar key={i} className={styles.cardStars} />
          ))}
          <div className={styles.cardValues}>5.0 ( 23 Reviews )</div>
        </div>

        <div
          style={{ width: "300px", paddingBottom: "25px" }}
          className={styles.cardValues}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          suscipit qui, expedita mollitia reiciendis
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.cardValues}>
            <MdCalendarToday
              style={{
                color: "red",
                fontSize: "12px",
                padding: "0px 5px 5px 0px",
              }}
            />
            <span>Nov. 10, 10:30 AM - Nov. 29, 6:30 PM</span>
          </div>
          <div className={styles.cardValues}>
            <MdLocationOn
              style={{
                color: "red",
                fontSize: "12px",
                padding: "0px 5px 5px 0px",
              }}
            />
            <span>Sindalah City</span>
          </div>
          <div className={styles.cardValues}>
            <CiGrid41
              style={{
                color: "red",
                fontSize: "12px",
                padding: "0px 5px 5px 0px",
              }}
            />
            <span>Golf</span>
          </div>
        </div>
        <div className={styles.suggest}>
              <div className={styles.cardSuggestions}>
                <img src={satisfied} alt="" />
              <div style={{padding: "0px 5px 0px 5px"}}>
                Overwhelmed vibes are coming here
              </div>
              </div>
              <div className={styles.cardScheduled}>
                Scheduled
              </div>
        </div>
      </div>
    </div>
  );
};
