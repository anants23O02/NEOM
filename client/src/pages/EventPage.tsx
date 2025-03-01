import { UserReview } from "../components/UserReview/UserReview";
import { Navbar } from "../components/Navbar/Navbar";
import style2 from "../styles/eventpage.module.css";
import { MdStar } from "react-icons/md";
import image from "../assets/img/golf.jpg";
import { BiCategory } from "react-icons/bi";
import { userReviews } from "../assets/Dummydata/UserReviews";
import { SlLocationPin } from "react-icons/sl";
import logo from "../assets/img/overwhelmed.svg";
import { EventImages } from "../components/EventImages/EventImages";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { DivideArrays } from "../utils/DivideArrays";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { UpcomingEvents } from "../assets/Dummydata/serverData";
import {Footer} from "../components/Footer/Footer"
export const EventPage: React.FC = () => {
  const upcomingEventArray = DivideArrays(UpcomingEvents, 5);

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="section">
          <div className="sectionHeading">Round of Golf</div>
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
      <EventImages image={image} />
      <section className="container">
        <section className="container">
          <div className={style2.content}>
            <div className="sectionContent">
              <div className="sectionHeading">About the event</div>
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
                    <SlLocationPin />
                  </div>
                  <div className={style2.DescriptionDetailText}>
                    <h3>Great Location</h3>
                    <p>
                      Every guest has give a five star rating to this location.
                    </p>
                  </div>
                </div>
                <div className={style2.DescriptionDetail}>
                  <div className={style2.DescriptionDetailIcon}>
                    <img src={logo} alt="" />
                  </div>
                  <div className={style2.DescriptionDetailText}>
                    <h3>Invigoration & uplifting experience</h3>
                    <p>
                      This event has a rating of 5.0 which makes it overwhelmed.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style2.contentDetails}>
                Consequat deserunt duis esse excepteur anim qui laboris. In
                voluptate ex exercitation ullamco voluptate excepteur. Magna ut
                culpa incididunt eiusmod nulla velit mollit velit sit ullamco.
                Ipsum et sint nisi nisi tempor deserunt. Officia laboris ut anim
                et ut veniam deserunt ea dolor eu. ullamco. Ipsum et sint nisi
                nisi tempor deserunt. Officia laboris ut anim et ut veniam
                deserunt ea dolor eu. <br />
                <br /> Irure laborum pariatur sunt dolore dolor anim dolore eu
                voluptate est incididunt enim eiusmod. Do in non non excepteur
                laboris. Mollit mollit ullamco sunt in in consequat voluptate
                voluptate. Ut officia elit ex excepteur mollit ex. Occaecat
                ipsum aliqua deserunt adipisicing mollit cupidatat. Voluptate
                voluptate fugiat consequat pariatur excepteur ullamco et id aute
                cillum duis. Occaecat ipsum aliqua deserunt adipisicing mollit
                cupidatat. Voluptate voluptate fugiat consequat pariatur
                excepteur ullamco et id aute cillum duis.
              </div>



              <div className={style2.contentOperatorReview}>
                <div className="sectionHeading">Operator River Stone</div>

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
                </div>

              </div>
                    <div className={style2.operatorReview}>

                Proident nulla amet irure aute. Tempor incididunt veniam aliqua
                sint. Ipsum sit sunt dolor cillum proident. Officia mollit elit
                pariatur Lorem quis aute laborum magna fugiat excepteur. Elit
                proident anim ea ipsum sunt commodo velit dolor. Voluptate dolor
                voluptate eu elit consectetur aliquip magna culpa Lorem Lorem.
                    </div>


            </div>
          </div>
        </section>
      </section>

      <section className="container">
        <div className={style2.userReviews}>
          {userReviews.map((value, i) => {
            return <UserReview data={value} key={i} />;
          })}
        </div>
      </section>

      <section className="container">
        <div className="sectionHeading">
          Some more recommendations for you, Charlie!
          {upcomingEventArray.slice(1).map((upcomingEvents, i) => {
          return (
            <div className="fitCards" key={i}>
              {upcomingEvents.map((id, i) => {
                const matchedCard = LocationCards.find(
                  (card) => card.id === id
                );
                return matchedCard ? (
                  <RecommendCard
                    value={matchedCard}
                    type={"onlyHeart"}
                    key={i}
                  />
                ) : null;
              })}
            </div>
          );
        })}
        </div>
      </section>

      <Footer/>
    </>
  );
};
