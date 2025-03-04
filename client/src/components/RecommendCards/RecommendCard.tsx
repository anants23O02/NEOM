import { DynamicCardImage } from "../DynamicCardImage/DynamicCardImage";
import styles from "../../styles/recommendCard.module.css";
import logo from "../../assets/img/joy.svg";
import TruncatedText from "../../utils/TruncatedText";
import type { locationCards } from "../../assets/Dummydata/LocationCardInterface";
import type { RecommendCards } from "../../assets/Dummydata/LocationCardInterface";
import { getReview } from "../../utils/SmileySvg";
import { ConvertDate } from "../../utils/DateValue";
import { useNavigate } from "react-router-dom";


interface props {
  value: locationCards;
  data?: RecommendCards;
  type: string;
}

export const RecommendCard: React.FC<props> = ({ value, data, type, favorites }) => {
  const navigate = useNavigate();

  const startDate = ConvertDate(new Date(value.start_date));
  const endDate = ConvertDate(new Date(value.end_date));
  const Review = getReview(Number(value.stars));
  let overlay;

  if (data) {
    overlay = data.pos;
  }
  const handleClick =() => {
    navigate(`/event/${value.id}`);
  }

  return (
    <>
      <div className={styles.recommendCard} >
        <DynamicCardImage
          image={value.images}
          type={type}
          overlay={overlay}
          eventid={value.id}
          favorites={favorites}
        />
        <div className={styles.recommendCardContent} onClick= {handleClick}>
          <div className={styles.label}>
            <div className={styles.review}>
              <img src={Review.image} alt="" />
              <span>{Review.description[0]}</span>
            </div>
            <div className={styles.date}>
              {startDate[1] === endDate[1]
                ? `${startDate[1]} ${startDate[2]} - ${endDate[2]}`
                : `${startDate[1]} ${startDate[2]} - ${endDate[1]} ${endDate[2]}`}
            </div>
          </div>
          <div className={styles.title}>{TruncatedText(value.title, 3)}</div>
          <div className={styles.time}>
            {`${startDate[3]}:${
              startDate[4] < 10 ? "0" + String(startDate[4]) : startDate[4]
            } AM - ${endDate[3]}:${
              endDate[4] < 10 ? "0" + String(endDate[4]) : endDate[4]
            } PM`}
          </div>
        </div>
      </div>
    </>
  );
};
