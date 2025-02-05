import poster from "../../assets/img/golf.jpg";
import satisfied from "../../assets/img/appreciation.svg";
import styles from "./HorizontalCard.module.css";
import { MdCalendarToday } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import type { LocationCards } from "../../assets/Dummydata/LocationCardsInterface";

interface HorizontalCardProps {
  value: LocationCards;
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({ value }) => {
  // console.log("event :>> ", value);

  function TruncatedText(text: string, maxWords: number) {
    return text.split(" ").slice(0, maxWords).join(" ") + "...";
  }
  
  
  return (
    <div className={styles.card}>
      <div className={styles.cardPoster}>
        <img src={value.images[0]} alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeading}>{value.title}</div>
        <div className={styles.stars}>
          {[...Array(value.stars)].map((_, i) => (
            <MdStar key={i} className={styles.cardStars} />
          ))}
          <div
            className={styles.cardValues}
          >{`${value.stars} ( ${value.reviews} Reviews )`}</div>
        </div>

        <div className={styles.cardDescription}>
          {TruncatedText(value.description[0],25)}
          <span style={{ color: "red", textDecoration: "underline" }}>
            read more
          </span>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.cardDetail}>
            <MdCalendarToday
              style={{
                color: "red",
                fontSize: "12px",
                paddingRight: "2.3%",
                alignItems: "center",
              }}
            />
            <span>Nov 10, 10:30 AM - Nov 29, 6:30 PM</span>
          </div>
          <div className={styles.cardDetail}>
            <MdLocationOn
              style={{
                color: "red",
                fontSize: "12px",
                paddingRight: "2.3%",
                alignItems: "center",
              }}
            />
            <span>{value.location}</span>
          </div>
          <div className={styles.cardDetail}>
            <CiGrid41
              style={{
                color: "red",
                fontSize: "12px",
                paddingRight: "2.3%",
                alignItems: "center",
              }}
            />
            <span>{value.category} </span>
          </div>
        </div>
        <div className={styles.suggest}>
          <div className={styles.cardSuggestions}>
            <img src={satisfied} alt="" />
            <span>Overwhelmed vibes are coming here</span>
          </div>
          <div className={styles.cardScheduled}>Scheduled</div>
        </div>
      </div>
    </div>
  );
};
