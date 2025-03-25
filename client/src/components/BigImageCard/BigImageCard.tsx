import styles from "../../styles/BigImageCard.module.css";
import type {askReview} from '../../assets/Dummydata/LocationCardInterface'
import {useSelector} from "react-redux";
import {smileyReviews} from "../../utils/SmileySvg"

export const BigImageCard: React.FC<{value:askReview}> = ({value}) => {
  const events = useSelector((state) => state.events.events.events);
  const user = useSelector((state) => state.user.user.user);
  const event = events.find((eve) => eve.id === value.event_id);
  const user_event = user.user_events.find((eve => eve.event_id === value.event_id))
  const user_review = user.user_reviews.find((eve => eve.event_id === value.event_id))

  console.log('events :>> ', event,user_event,value,user_review);
  return (
    <>
      <div className={styles.bigCard}>
        <img src={event.images} alt="" />
        {user_review && <div className={styles.imageExp}>
            <img src={smileyReviews[user_review.rating]} alt="" />
        </div>}
        <div className={styles.bigCardContent}>
          {event.title}
        </div>
        <div className={styles.bigCardDate}>{user_event.event_date.split("T")[0]} </div>
        <div className={styles.bigCardDesc}>
          {value.question}
        </div>
        <div className={styles.bigCardFooter}>
        {
        !value.ask_review ? (<button onClick={()=>{}}>
                Yes, I accept
            </button>) :(
            <button onClick={()=>{}}>
                Yes, I would Share 
            </button>
            )
        }
            <a href="#">
                No, Thanks
            </a>
        </div>
      </div>
    </>
  );
};
