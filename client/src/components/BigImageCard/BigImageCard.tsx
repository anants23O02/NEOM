import styles from "../../styles/BigImageCard.module.css";
import type { askReview } from "../../assets/Dummydata/LocationCardInterface";
import { useSelector } from "react-redux";
import { smileyReviews } from "../../utils/SmileySvg";
import { useState } from "react";
import { ReviewModal } from "../ReviewModal/ReviewModal";

export const BigImageCard: React.FC<{ value: askReview }> = ({ value ,setno}) => {
  const [no, setNo] = useState(false);
  const events = useSelector((state) => state.events.events.events);
  const user = useSelector((state) => state.user.user.user);
  const event = events.find((eve) => eve.id === value.event_id);
  const user_event = user.user_events.find(
    (eve) => eve.event_id === value.event_id
  );
  const user_review = user.user_reviews.find(
    (eve) => eve.event_id === value.event_id
  );
  const [accept, handleAccept] = useState(false);
  const [share, handleShare] = useState(false);
  const [modal, setModal] = useState(false);
  const find = user.user_reviews.find((eve) => eve.event_id === value.event_id);
  console.log("events :>> ", event, user_event, value, user_review);
  const handleNo = () => {
    setNo(true);
    // setno(true)
  };
  return (
    <>
      {modal && (
        <ReviewModal
          isOpen={modal}
          onClose={setModal}
          userName={user.user.firstname}
          event_id={value.event_id}
          user_id={user.userid}
        />
      )}
      {!no && (
        <>
          <div className={styles.bigCard}>
            <img src={event.images} alt="" />
            {user_review && (
              <div className={styles.imageExp}>
                <img src={smileyReviews[user_review.rating]} alt="" />
              </div>
            )}
            <div className={styles.bigCardContent}>{event.title}</div>
            <div className={styles.bigCardDate}>
              {user_event.event_date.split("T")[0]}{" "}
            </div>
            <div className={styles.bigCardDesc}>{value.question}</div>
            <div className={styles.bigCardFooter}>
              {!value.ask_review ? (
                accept ? (
                  <div>Thank you for accepting</div>
                ) : (
                  <button onClick={() => handleAccept(true)}>
                    Yes, I accept
                  </button>
                )
              ) : !find ? (
                <button
                  onClick={() => {
                    handleShare(true);
                    setModal(true);
                  }}
                >
                  Yes, I would Share
                </button>
              ) : (
                <div>Thank you for sharing !!!</div>
              )}
              {!accept && (!share || !find) && (
                <a href="#" onClick={handleNo}>
                  No, Thanks
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
