import { TranslatingArrows } from "../utils/TranslatiingArrows";
import { motion } from "framer-motion";
import { UserReview } from "../components/UserReview/UserReview";
import { Navbar } from "../components/Navbar/Navbar";
import style2 from "../styles/eventpage.module.css";
import { MdStar } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { userReviews } from "../assets/Dummydata/UserReviews";
import { SlLocationPin } from "react-icons/sl";
import logo from "../assets/img/overwhelmed.svg";
import { EventImages } from "../components/EventImages/EventImages";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { DivideArrays } from "../utils/DivideArrays";
import { UpcomingEvents } from "../assets/Dummydata/serverData";
import { Footer } from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import ScheduleModal from "../components/ScheduleModal/SheduleModal";
import { useParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { ReviewModal } from "../components/ReviewModal/ReviewModal";
import { useLocation } from "react-router-dom";
import { getReview } from "../utils/SmileySvg";
import ScrollTop from "../components/ScrollTop/ScrollTop";

export const EventPage: React.FC = () => {
  const events = useSelector((state) => state.events.events.events);
  const userData = useSelector((state) => state.user.user.user);
  const upcomingEventArray = DivideArrays(UpcomingEvents, 5);
  const { eventId } = useParams();
  // const { pathname } = useLocation();

  console.log("userData :>> ", userData);
  const checkScheduledEvent =
    userData.user_events.filter(
      (event) =>
        event.event_id === Number(eventId) && event.status === "scheduled"
    ).length !== 0
      ? true
      : false;
  const checkAttendedEvent =
    userData.user_events.filter(
      (event) =>
        event.event_id === Number(eventId) && event.status === "attended"
    ).length !== 0
      ? true
      : false;

      const { pathname } = useLocation();

  useEffect(() => {
    // Wait for a short delay
    setTimeout(() => {
      // Use requestAnimationFrame twice to ensure rendering is done
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
        });
      });
    }, 200); // Adjust delay as needed (200ms or more)
  }, [pathname]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventarr = events.filter((card) => card.id === Number(eventId));
  const event = eventarr[0];

  const reviewed = userData.user_reviews.filter(
    (reviews) => reviews.event_id === event.id
  );

  console.log(
    "checkScheduledEvent,eventarr,event :>> ",
    checkScheduledEvent,
    eventarr,
    event
  );
  // console.log("event :>> ", event, eventId);
  //This is for setting the event on event page

  const [translate, settranslate] = useState(0);
  const [Open, setOpen] = useState(false);
  const askReview = () => {
    setOpen(true);
  };

  function rightTranslate() {
    if (translate > -34) {
      const newtranslate = translate - 34;
      settranslate(newtranslate);
    } else {
      return;
    }
  }

  function leftTranslate() {
    if (translate < 0) {
      const newtranslate = translate + 34;
      settranslate(newtranslate);
    } else {
      return;
    }
  }

  return (
    <>
        {/* <ScrollTop/> */}
      <Navbar />
      <section className="container">
        <ReviewModal
          isOpen={Open}
          onClose={setOpen}
          username={userData.user.firstname}
          event_id ={event.id} user_id={userData.userid} 
        />
        <div className={style2.section}>
          {checkAttendedEvent && reviewed.length === 0 && (
            <div className={style2.askReviewContainer}>
              <div className={style2.askReviewContent}>
                <div className={style2.askReviewTitle}>
                  {`Hey ${userData.user.firstname},`}
                </div>
                <div className={style2.askReviewDesc}>
                  We are sure that you have enjoyed this event a lot. Would you
                  like to share your feedback with us. <br /> It helps us to
                  imporve and serve you better.
                </div>
              </div>
              <div className={style2.askReviewButton}>
                <button onClick={askReview}>Add a review</button>
              </div>
            </div>
          )}
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

      <EventImages
        image={event.images}
        status={
          checkScheduledEvent
            ? "Scheduled"
            : checkAttendedEvent
            ? "Attended"
            : "Upcoming"
        }
      />

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
                      <h3>{event.category} </h3>
                      <p>
                        This is one of the many events under the{" "}
                        {event.category} category
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
                      <img src={getReview(event.stars).image} alt="" />
                    </div>
                    <div className={style2.DescriptionDetailText}>
                      <h3>{getReview(event.stars).description[0]}</h3>
                      <p>
                        This event has a rating of {event.stars} which makes it
                        {getReview(event.stars).description[1].split("-")[1]}.
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

            <ScheduleModal
              event={event}
              isOpen={true}
              userId={userData.user.userid}
              checkScheduledEvent={checkScheduledEvent}
              checkAttendedEvent={checkAttendedEvent}
            />
          </div>
        </section>
      </section>

      <section className="container" style={{ margin: "1.3rem 0" }}>
        <div className={style2.userReviews}>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: " max-content",
              gap: "15px",
            }}
            animate={{ x: ` ${translate}vw` }}
            transition={{ duration: 0.5 }}
          >
            {userReviews.map((value, i) => {
              return <UserReview data={value} key={i} />;
            })}
          </motion.div>
        </div>
        <div>
          <TranslatingArrows
            leftTranslate={leftTranslate}
            rightTranslate={rightTranslate}
            translate={translate}
            max={-34}
          />
        </div>
      </section>

      <section className="container">
        <div className="sectionHeading">
          Some more recommendations for you, {userData.user.firstname}!
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
