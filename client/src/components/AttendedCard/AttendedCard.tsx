import { DynamicCardImage } from "../DynamicCardImage/DynamicCardImage";
import { MdStar } from "react-icons/md";
import styles from "../../styles/attendedcard.module.css";
import TruncatedText from "../../utils/TruncatedText";
import type { locationCards } from "../../assets/Dummydata/LocationCardInterface";
import { ConvertDate } from "../../utils/DateValue";

export const AttendedCard: React.FC = ({ value, rating, guests, date }) => {
  const attDate = ConvertDate(new Date(date));
  const handleClick = () => {
    navigate(`/event/${value.id}`);
  };
  return (
    <>
      <div className={styles.attendedCard}>
        <DynamicCardImage image={value.images} eventid={value.id} />
        <div className={styles.attendedcardContent} onClick={handleClick}>
          <div className={styles.title}>{TruncatedText(value.title, 3)}</div>
          <div className={styles.attendance}>
            {`${guests}`} Guests attended this event
          </div>
          <div className={styles.date}>
            on {`${attDate[1]}  ${attDate[2]}, ${attDate[0]} `}{" "}
          </div>
          <div className={styles.rating}>
            {rating > 0 ? (
              <>
                <span> You Rated this event </span>
                <div className={styles.stars}>
                  {[...Array(Number(rating))].map((_, i) => (
                    <MdStar key={i} className={styles.cardStars} />
                  ))}
                </div>
              </>
            ) : (
              <div>No rating</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
