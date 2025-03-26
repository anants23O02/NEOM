import styles from "../../styles/ReviewModal.module.css";
import React, { useState } from "react";
import Rating from "react-rating";
import { MdStar, MdStarBorder } from "react-icons/md";
import ReactStars from "react-rating-stars-component";

const StarRatingExample = () => {
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="gold"
      />
      <p>Your rating: {rating}</p>
    </div>
  );
};

export const StarRatingRow: React.FC<{ label: string }> = ({ label,value,setValue }) => {
  const [rating, setRating] = useState(0);
  
  return (
    <div className={styles.starRow}>
      <div className={styles.starLabel}>{label}</div>
      <div className={styles.stars}>
        <Rating
          initialRating={rating}
          emptySymbol={<MdStarBorder size={24} color="#ccc" />}
          fullSymbol={<MdStar size={24} color="gold" />}
          onChange={(rate) => {
            setValue(value + rate)
           
            setRating(rate)}}
        />
      </div>
    </div>
  );
};
