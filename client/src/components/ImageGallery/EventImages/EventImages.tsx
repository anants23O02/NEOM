interface EventImagesProps {
  image: string;
}
import { useState } from "react";
import styles from "../../styles/eventimages.module.css";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { set } from "lodash";

export const EventImages: React.FC<EventImagesProps> = ({ image, status }) => {
  const [gallery, setGallery] = useState();
  const handleShowall = () => {
    setGallery((prev) => !prev);
  };
  return (
    <>
      {gallery && <ImageGallery image={image} isOpen={gallery} onClose={setGallery} />}

      <section className="container">
        <div className={styles.section}>
          <div className={styles.completion}>{`${status}`}</div>
          <div className={styles.imageSection}>
            <div className={styles.fourImages}>
              <img src={image} alt="" style={{ borderRadius: "1rem 0 0 0" }} />
              <img src={image} alt="" />
              <img src={image} alt="" style={{ borderRadius: "0 0 0 1rem" }} />
              <img src={image} alt="" />
            </div>
            <div className={styles.bigImage} style={{ position: "relative" }}>
              <img
                src={image}
                alt=""
                style={{ borderRadius: "0 1rem 1rem 0" }}
              />
              <button
                style={{
                  width: "7rem",
                  position: "absolute",
                  padding: "0.5rem 0.7rem",
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  bottom: "1rem",
                  right: "1rem",
                  cursor: "pointer",
                }}
                onClick={handleShowall}
              >
                Show all
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
