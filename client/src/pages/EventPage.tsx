import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/dashboard.module.css";
import style2 from "../styles/eventpage.module.css";
import { MdStar } from "react-icons/md";
import image from "../assets/img/golf.jpg";
import { BiCategory } from "react-icons/bi";
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
              <img src={image} alt="" style={{ borderRadius: "1rem 0 0 0" }} />
              <img
                src={image}
                alt=""
                style={{ marginLeft: "0px !important" }}
              />
            </div>
            <div className={style2.twoImages}>
              <img src={image} alt="" style={{ borderRadius: "0 0 0 1rem" }} />
              <img
                src={image}
                alt=""
                style={{ marginLeft: "0px !important" }}
              />
            </div>
          </div>
          <div className={style2.bigImage}>
            <img src={image} alt="" style={{ borderRadius: "0 1rem 1rem 0" }} />
          </div>
        </div>
      </section>
      <section className="container">
        <section className="container">
          <div className={style2.content}>
            <div className={style2.contentDescrption}>
              <div className={style2.contentHeading}>About the event</div>
              <div className={style2.contentDescriptionDetails}>
                <div className={style2.DescriptionDetail}>
                  <div className={style2.DescriptionDetailIcon}>
                    <BiCategory />
                  </div>
                  <div className={style2.DescriptionDetailText}>
                    <h3>Golf</h3>
                    <p>
                      This is one of the many events under the Golf category
                    </p>
                  </div>
                </div>
                <div className={style2.DescriptionDetail}>
                  <div className={style2.DescriptionDetailIcon}>
                    <BiCategory />
                  </div>
                  <div className={style2.DescriptionDetailText}>
                    <h3>Golf</h3>
                    <p>
                      This is one of the many events under the Golf category
                    </p>
                  </div>
                </div>
                <div className={style2.DescriptionDetail}>
                  <div className={style2.DescriptionDetailIcon}>
                    <BiCategory />
                  </div>
                  <div className={style2.DescriptionDetailText}>
                    <h3>Golf</h3>
                    <p>
                      This is one of the many events under the Golf category
                    </p>
                  </div>
                </div>
              </div>
              <div className={style2.contentDescriptionText}>
                Consequat deserunt duis esse excepteur anim qui laboris. In
                voluptate ex exercitation ullamco voluptate excepteur. Magna ut
                culpa incididunt eiusmod nulla velit mollit velit sit ullamco.
                Ipsum et sint nisi nisi tempor deserunt. Officia laboris ut anim
                et ut veniam deserunt ea dolor eu. Irure laborum pariatur sunt
                dolore dolor anim dolore eu voluptate est incididunt enim
                eiusmod. Do in non non excepteur laboris. Mollit mollit ullamco
                sunt in in consequat voluptate voluptate. Ut officia elit ex
                excepteur mollit ex. Occaecat ipsum aliqua deserunt adipisicing
                mollit cupidatat. Voluptate voluptate fugiat consequat pariatur
                excepteur ullamco et id aute cillum duis.
              </div>
              <div className={style2.contentOperatorReview}>
              <div className={style2.contentHeading}>About the event</div>
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
              </div>
            </div>
            <div className={style2.contentDetails}></div>
          </div>
        </section>
      </section>
    </>
  );
};
