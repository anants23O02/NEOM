import React, { useState, useEffect } from "react";
import styles from "../../styles/DynamicCardImage.module.css";
import {
  addFavoriteEvent,
  removeFavoriteEvent,
} from "../../store/userSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import {addToFavorite,removeFromFavorite} from "../../services/eventServices/EventAPI";


interface DynamicCardImageProps {
  image: string;
  type?: string;
  overlay?: string | number;
  eventid: number;
}

export const DynamicCardImage: React.FC<DynamicCardImageProps> = ({
  image,
  type,
  overlay,
  eventid,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user.user);
  const userid = userData.user.user.userid;
  const favEvents = userData?.user?.fav_events || [];
  const [isFavorite, setIsFavorite] = useState(favEvents.includes(eventid));

  useEffect(() => {
    setIsFavorite(favEvents.includes(eventid));
  }, [favEvents, eventid]);

  const handleClick = () => {
    if (favEvents.includes(eventid)) {
      const result = removeFromFavorite(eventid,userid);
      dispatch(removeFavoriteEvent(eventid));
      setIsFavorite(false);
    }
    else{
      const result = addToFavorite(eventid,userid);
      // console.log('userid :>> ', userid);
      dispatch(addFavoriteEvent(eventid));
    }
  };

  const removeFavorite = () => {
    const result = removeFromFavorite(eventid,userid);
    dispatch(removeFavoriteEvent(eventid));

  };

  const handleClickImage = () => {
    navigate(`/event/${eventid}`);
  };

  return (
    <div className={styles.imageContainer}>
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
          <button onClick={removeFavorite} className={styles.removeButton}>
            Remove
          </button>
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
      
        <img src={image} onClick={handleClickImage} className={styles.cardImage} alt="Dynamic" />
      
    </div>
  );
};
