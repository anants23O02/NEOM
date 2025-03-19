interface EventImagesProps {
  image: string;
}
import styles from "../../styles/eventimages.module.css";

export const EventImages: React.FC<EventImagesProps> = ({ image,status }) => {
  return (
    <section className="container">
      <div className={styles.section}>
      <div className={styles.completion}> 
        {`${status}`}
      </div>
        <div className={styles.imageSection}>
          <div className={styles.fourImages}>
            <img src={image} alt="" style={{ borderRadius: "1rem 0 0 0" }} />
            <img src={image} alt="" />
            <img src={image} alt="" style={{ borderRadius: "0 0 0 1rem" }} />
            <img src={image} alt="" />
          </div>
          <div className={styles.bigImage}>
            <img src={image} alt="" style={{ borderRadius: "0 1rem 1rem 0" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
