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
import { Footer } from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import ScheduleModal from "../components/ScheduleModal/SheduleModal";
import { useParams } from "react-router-dom";

export const EventPage: React.FC = () => {
  const events = useSelector((state) => state.events.events.events);
  const userData = useSelector((state) => state.user.user.user);
  const upcomingEventArray = DivideArrays(UpcomingEvents, 5);
  const { eventId } = useParams();
  const matchedEvent = userData.user_events.filter(event => event.event_id === Number(eventId));
  const eventarr = events.filter((card) => card.id === Number(eventId) ) ;
  const event = eventarr[0];
  console.log("event :>> ", event, eventId);

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="section">
          <div className="sectionHeading">{event.title} </div>
          <div className={style2.headingCntent}>
            <div className={style2.headingstars}>
              {[...Array(Number(event.stars))].map((_, i) => {
                return (
                  <div className={style2.stars}>
                    <MdStar key={i} className={style2.cardStars} />
                  </div>
                );
              })}
            </div>
            <div className={style2.headingRating}>{event.stars} </div>
            <div
              className={style2.headingReviews}
            >{`${event.reviews} reviews`}</div>
            <div
              className={style2.headingCity}
            >{`${event.city}, ${event.country}`}</div>
          </div>
        </div>
      </section>
      <EventImages image={event.images} />
      <section className="container">
        <section className="container">
          <div className={style2.descContent}>
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
                        Every guest has give a five star rating to this
                        location.
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
                        This event has a rating of 5.0 which makes it
                        overwhelmed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style2.contentDetails}>{event.event_desc}</div>

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
                  Proident nulla amet irure aute. Tempor incididunt veniam
                  aliqua sint. Ipsum sit sunt dolor cillum proident. Officia
                  mollit elit pariatur Lorem quis aute laborum magna fugiat
                  excepteur. Elit proident anim ea ipsum sunt commodo velit
                  dolor. Voluptate dolor voluptate eu elit consectetur aliquip
                  magna culpa Lorem Lorem.
                </div>
              </div>
            </div>
            {matchedEvent.length === 0 && <ScheduleModal eventId={Number(eventId)} isOpen={true} />}
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
        </div>

        <div className="fitCards">
          {events.slice(5).map((id, i) => {
            return <RecommendCard value={id} type={"onlyHeart"} key={i} />;
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};
