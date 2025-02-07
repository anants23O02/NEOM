import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/dashboard.module.css";
import style2 from "../styles/eventpage.module.css";
import { MdStar } from "react-icons/md";
import image from "../assets/img/golf.jpg";

export const EventPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeading}>Round of Golf</div>
          <div className={style2.headingCntent}>
            <div className={style2.headingstars}>
              {[...Array(5)].map((_, i) => {
                return (
                  <div className={style2.stars}>
                    <MdStar key={i} className={style2.cardStars} />
                  </div>
                );
              })}
            </div>
            <div className={style2.headingRating}>5.0</div>
            <div className={style2.headingReviews}>23 reviews</div>
            <div className={style2.headingCity}>Sindalah City, Dubai</div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={style2.completion}>Completed</div>
        <div className={style2.imageSection}>
          <div className={style2.fourImages}>
            <div className={style2.twoImages}>
              <img src={image} alt="" style={{borderRadius:'1rem 0 0 0'}}/>
              <img src={image} alt="" style={{marginLeft:'0px !important'}}/>
            </div>
            <div className={style2.twoImages}>
              <img src={image} alt="" style={{borderRadius:'0 0 0 1rem'}} />
              <img src={image} alt="" style={{marginLeft:'0px !important'}} />
            </div>
          </div>
          <div className={style2.bigImage}>
            <img src={image} alt="" style={{borderRadius:'0 1rem 1rem 0'}} />
          </div>
        </div>
      </section>
      <section className="container">
        <section className="container">
          <div className={style2.cntent}>
            <div className={style2.contentDescrption}>
              <div className={style2.contentHeading}></div>
              <div className={style2.contentDescriptionDetails}></div>
              <div className={style2.contentDescriptionText}></div>
              <div className={style2.contentOperatorReview}></div>
            </div>
            <div className={style2.contentDetails}></div>
          </div>
        </section>
        {}
      </section>
    </>
  );
};
