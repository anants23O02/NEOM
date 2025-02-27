import React, { useState, useEffect } from "react";
import styles from "../../styles/DynamicCardImage.module.css";
import { addFavoriteEvent,removeFavoriteEvent } from "../../store/userSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { RootState } from "../../store/store"; // Ensure correct state type import

interface DynamicCardImageProps {
  image: string;
  type?: string;
  overlay?: string | number;
  eventid: number; // Ensure eventid is correctly passed
}

export const DynamicCardImage: React.FC<DynamicCardImageProps> = ({
  image,
  type,
  overlay,
  eventid,
}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.user);
  const favEvents = userData?.user?.fav_events || []; // Corrected path

  const [isFavorite, setIsFavorite] = useState(favEvents.includes(eventid));
  useEffect(() => {
    setIsFavorite(favEvents.includes(eventid));
  }, [favEvents, eventid]);

  const handleClick = () => {
    if(favEvents.includes(eventid)) {
      return 
    }
    dispatch(addFavoriteEvent(eventid)); 
  };
  const removeFavorite = () => {
    dispatch(removeFavoriteEvent(eventid))
  }

  return (
    <div className={styles.imageContainer}>
      <img src={image} className={styles.cardImage} alt="Dynamic" />

      {type === "top5" && (
        <div className={styles.imageOverlay}>
          <FiHeart
            onClick={handleClick}
            className={isFavorite ? styles.heartRed : styles.heart}
          />
          <div className={styles.number}>{overlay}</div>
        </div>
      )}
      {type === "remove" && (
        <div className={styles.imageOverlay}>
          <button onClick={removeFavorite} className={styles.removeButton}>Remove</button>
        </div>
      )}
      {type === "onlyHeart" && (
        <div className={styles.imageOverlay}>
          <FiHeart
            onClick={handleClick}
            className={isFavorite ? styles.heartRed : styles.heart}
          />
        </div>
      )}
    </div>
  );
};
