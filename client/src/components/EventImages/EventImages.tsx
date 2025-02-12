interface EventImagesProps{
    image:string;
}
import styles from '../../styles/eventimages.module.css';

export const EventImages: React.FC<EventImagesProps> = ({image}) => {

            return (
                <section className="container">
                <div className={styles.completion}>Completed</div>
                <div className={styles.imageSection}>
                  <div className={styles.fourImages}>
                    <div className={styles.twoImages}>
                      <img src={image} alt="" style={{ borderRadius: "1rem 0 0 0" }} />
                      <img
                        src={image}
                        alt=""
                        style={{ marginLeft: "0px !important" }}
                      />
                    </div>
                    <div className={styles.twoImages}>
                      <img src={image} alt="" style={{ borderRadius: "0 0 0 1rem" }} />
                      <img
                        src={image}
                        alt=""
                        style={{ marginLeft: "0px !important" }}
                      />
                    </div>
                  </div>
                  <div className={styles.bigImage}>
                    <img src={image} alt="" style={{ borderRadius: "0 1rem 1rem 0" }} />
                  </div>
                </div>
              </section>
            );
}