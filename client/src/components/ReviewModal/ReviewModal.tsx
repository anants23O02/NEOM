import { useDispatch } from "react-redux";
import { addusereview } from "../../store/userSlice";
import styles from "../../styles/ReviewModal.module.css";
import { StarRatingRow } from "../StarRatingRow/StarRatingRow";
import { Speedometer } from "../speedometer/speedometer";
import { useState } from "react";

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  userName = "Charlie",
  event_id,
  user_id,
}) => {
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const [next, setnext] = useState(false);
  const [review, setReview] = useState("");
  const [value, setValue] = useState(0);
  if (!isOpen) return null;

  const handleSubmit = () => {
    setnext(false);
    onClose(false);
    console.log(review);
    dispatch(
      addusereview({
        event_id: event_id,
        user_id: user_id,
        rating: value / 5,
        description:
          review,
      })
    );
  };

  const handleNext = () => {
    setnext(true);
    const boundaries = [3, 8, 13, 18, 23, 28];
    for (let i = 0; i < boundaries.length; i++) {
      if (value < boundaries[i]) {
        setVal(boundaries[i]);
        return;
      }
    }
    console.log(value, val);
  };

  return (
    <>
      <div className={styles.overlay} onClick={() => onClose(false)} />
      <div className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Add a review</h2>
        <p className={styles.introText}>
          Hi {userName}, if you’re here on this page, we bet you enjoy this
          event fully. Would you mind to share your valuable feedback review
          with us?
        </p>

        {!next ? (
          <div className={styles.Review}>
            <div className={styles.starReview}>
              <StarRatingRow
                label="Quality of Event"
                value={value}
                setValue={setValue}
              />
              <StarRatingRow
                label="Services at Event"
                value={value}
                setValue={setValue}
              />
              <StarRatingRow
                label="Facilities of Event"
                value={value}
                setValue={setValue}
              />
            </div>
            <div className={styles.starReview}>
              <StarRatingRow
                label="Operator of Event"
                value={value}
                setValue={setValue}
              />
              <StarRatingRow
                label="Staff Politeness"
                value={value}
                setValue={setValue}
              />
            </div>
          </div>
        ) : (
          <Speedometer
            value={-1 * (30 - val)}
            width={450}
            height={300}
            down={130}
            emojix={200}
            emojir={35}
          />
        )}

        <textarea
          className={styles.textArea}
          placeholder="Share your feedback and suggestions about this event..."
          onChange={(e) => setReview(e.target.value)}
        />

        {!next ? (
          <button className={styles.submitButton} onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </>
  );
};
