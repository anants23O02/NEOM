import styles from "../../styles/HorizontalCard.module.css";
import { CiCalendar } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import type { locationCards } from "../../assets/Dummydata/LocationCardInterface";
import group from "../../assets/img/Group.svg";
import TruncatedText from "../../utils/TruncatedText";
import { getReview } from "../../utils/SmileySvg";
import { ConvertDate } from "../../utils/DateValue";
import { useNavigate } from "react-router-dom";

interface HorizontalCardProps {
  value: locationCards;
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({ value }) => {
  const navigate = useNavigate();
  const Review = getReview(value.stars);
  const handleClick =() => {
    navigate(`/event/${value.id}`);
  }
  const startDateArray = ConvertDate(new Date(value.start_date));
  const endDateArray = ConvertDate(new Date(value.end_date));
  return (
    <div className={styles.card} onClick= {handleClick}>
      {/* image side */}
      <div className={styles.cardPoster}>
        <img src={value.images} alt="" />
        <div className={styles.imageData}>
          <img src={group} alt="" />
        </div>
      </div>

      {/* content side */}
      <div className={styles.cardContent}>
        <div className={styles.cardHeading}>
          {TruncatedText(value.title, 4)}
        </div>

        <div className={styles.stars}>
          {[...Array(Number(value.stars))].map((_, i) => (
            <MdStar key={i} className={styles.cardStars} />
          ))}
          <div
            className={styles.cardValues}
          >{`${value.stars}  ( ${value.reviews} Reviews )`}</div>
        </div>

        <div className={styles.cardDescription}>
          {TruncatedText(value.event_desc, 20)}
          <span style={{ color: "red", textDecoration: "underline" }}>
            read more
          </span>
        </div>

        <div className={styles.cardDetails}>
          <div className={styles.cardDetail}>
            <CiCalendar
              style={{
                color: "red",
                // fontSize: "11px",
                paddingRight: "2.3%",
                alignItems: "center",
              }}
            />
            <span>
              {`${startDateArray[1]} ${startDateArray[2]}, ${startDateArray[3]}:${startDateArray[4]} AM - ${endDateArray[1]} ${endDateArray[2]}, ${endDateArray[3]}:${endDateArray[4]} PM`}
            </span>
          </div>
          <div className={styles.cardDetail}>
            <CiLocationOn
              style={{
                color: "red",
                // fontSize: "11px",
                paddingRight: "2.3%",
                alignItems: "center",
              }}
            />
            <span>{value.city}</span>
          </div>
          <div className={styles.cardDetail}>
            <BiCategory
              style={{
                color: "red",
                // fontSize: "11px",
                paddingRight: "2.3%",
                alignItems: "center",
              }}
            />
            <span>{value.category} </span>
          </div>
        </div>

        <div className={styles.suggest}>
          <div className={styles.cardSuggestions}>
            <img src={Review.image} alt="" />
            <span>{Review.description[0]} </span>
          </div>

          <div className={styles.cardScheduled}>Scheduled</div>
        </div>
      </div>
    </div>
  );
};
