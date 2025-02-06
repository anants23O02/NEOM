import React from "react";
import styles from "../../styles/DynamicCardImage.module.css";
import { FiHeart } from "react-icons/fi";
interface DynamicCardImageProps {
  image: string;
  type?: string;
  overlay?: string | number;
}

export const DynamicCardImage: React.FC<DynamicCardImageProps> = ({ image, type, overlay }) => {
  return (
    
    <div className={styles.imageContainer}>
      <img src={image} className={styles.cardImage} alt="Dynamic" />

      {type === "top5" && (
        <div className={styles.imageOverlay}>
          <div >
            <FiHeart  className={styles.heart}/>
          </div>
          <div className={styles.number}>{overlay}</div>
        </div>
      )}
      {type === "remove" && (
        <div className={styles.imageOverlay}>
          
          <button className={styles.removeButton}>
            Remove
          </button>
          
          </div>
      )}
    </div>
  );
};
