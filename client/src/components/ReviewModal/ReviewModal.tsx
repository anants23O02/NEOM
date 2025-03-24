import styles from "../../styles/ReviewModal.module.css";
import { StarRatingRow } from "../StarRatingRow/StarRatingRow";
import { Speedometer } from "../speedometer/speedometer";
import { useState } from "react";
export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  userName = "Charlie",
}) => {
  const [next, setnext] = useState(false);
  if (!isOpen) return null;

  const handleSubmit = () => {
    setnext(false);
    onClose(false);
  };
  const handleNext = () => {
    setnext(true);
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
              <StarRatingRow label="Quality of Event" />
              <StarRatingRow label="Services at Event" />
              <StarRatingRow label="Facilities of Event" />
            </div>
            <div className={styles.starReview}>
              <StarRatingRow label="Operator of Event" />
              <StarRatingRow label="Staff Politeness" />
            </div>
          </div>
        ) : (
          <Speedometer value={-3} />
        )}

        <textarea
          className={styles.textArea}
          placeholder="Share your feedback and suggestions about this event..."
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
