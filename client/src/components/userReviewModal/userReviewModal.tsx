import React, { useState } from "react";
import { FiStar } from "react-icons/fi";
import styles from "../../styles/userReviewModal.module.css";

export const AddReviewModal = ({ isOpen, onClose, username = "Charlie" }) => {
  const [qualityOfEvent, setQualityOfEvent] = useState(0);
  const [servicesAtEvent, setServicesAtEvent] = useState(0);
  const [facilitiesOfEvent, setFacilitiesOfEvent] = useState(0);
  const [operatorOfEvent, setOperatorOfEvent] = useState(0);
  const [staffPoliteness, setStaffPoliteness] = useState(0);
  const [feedback, setFeedback] = useState("");

  const renderStars = (rating, setRating) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <FiStar
          key={index}
          size={24}
          className={
            starValue <= rating ? styles.filledStar : styles.emptyStar
          }
          onClick={() => setRating(starValue)}
        />
      );
    });
  };

  const handleSubmit = () => {
    console.log("Submitting review:", {
      qualityOfEvent,
      servicesAtEvent,
      facilitiesOfEvent,
      operatorOfEvent,
      staffPoliteness,
      feedback,
    });

    onClose(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={() => {onClose(false)}}>
          &times;
        </button>

        <h2>Add a review</h2>
        <p className={styles.modalSubtitle}>
          Hi {username}, If you're here on this page, we bet you enjoy this
          event fully. Would you mind sharing your valuable feedback with us?
        </p>

        <div className={styles.ratingSection}>
          <div className={styles.ratingRow}>
            <span>Quality of Event</span>
            <div className={styles.starsContainer}>
              {renderStars(qualityOfEvent, setQualityOfEvent)}
            </div>
          </div>

          <div className={styles.ratingRow}>
            <span>Services at Event</span>
            <div className={styles.starsContainer}>
              {renderStars(servicesAtEvent, setServicesAtEvent)}
            </div>
          </div>

          <div className={styles.ratingRow}>
            <span>Facilities of Event</span>
            <div className={styles.starsContainer}>
              {renderStars(facilitiesOfEvent, setFacilitiesOfEvent)}
            </div>
          </div>

          <div className={styles.ratingRow}>
            <span>Operator of Event</span>
            <div className={styles.starsContainer}>
              {renderStars(operatorOfEvent, setOperatorOfEvent)}
            </div>
          </div>

          <div className={styles.ratingRow}>
            <span>Staff Politeness</span>
            <div className={styles.starsContainer}>
              {renderStars(staffPoliteness, setStaffPoliteness)}
            </div>
          </div>
        </div>

        <textarea
          className={styles.feedbackInput}
          placeholder="Share your feedback and suggestions about this event..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
