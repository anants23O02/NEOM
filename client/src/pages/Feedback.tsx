import { userCharlie } from "../assets/Dummydata/userData";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import Styles from "../styles/feedback.module.css";
import { FeedbackElement } from "../components/FeedbackElement/FeedbackElement";
import { Speedometer } from "../components/speedometer/speedometer";
import { smileyReviews } from "../utils/SmileySvg"; // anger, appreciation, etc.
import { useSelector } from "react-redux";

export const Feedback: React.FC = () => {
  const data = useSelector((state) => state.user.user.user);
  console.log('data :>> ', data);
  const events = useSelector((state) => state.events.events.events);
  console.log('events :>> ', events);
  const attEventId = data.user_events
    .filter((event) => event.status === "attended")
    .map((event) => event.event_id);
  const attendedEvents = events.filter((event) =>
    attEventId.includes(event.id)
  );

  return (
    <>
      <Navbar />
      <div className={Styles.feedbackHeader}>
        <div className={Styles.feedbackHeaderLeft}>
          <div className={Styles.headerLeftImage}>
            <img src={smileyReviews[5]} alt="" />
          </div>
          <div className="sectionHeading">OverWhelmed experience</div>
          <div className="sectionHeading">
            Your Vibo-meter reading excites us too
          </div>
          <div className={Styles.headerLeftContent}>
            We are happy too because we successfully keep you happy during this
            visit to Sindalah City.
          </div>
        </div>
        <div className={Styles.feedbackHeaderRight}>
          <Speedometer value={-3} />
        </div>
      </div>

      <section className="container">
        <div className={Styles.cardWrapper}>
          <div className="section">
            <div className="sectionHeading">
              Hi {`${data.user.firstname}`}, <br /> Here are the glimpses of your feedback shared
              with us
            </div>
          </div>

          {attendedEvents.map((event) => {
            const review = data.user_reviews.find((eve) => eve.event_id === event.id)
            const date = data.user_events.find((eve) => eve.event_id === event.id);
            return ( 
              <FeedbackElement
                card={event}
                index={review ? review.rating:0}
                date={date.event_date}
                review = {review ? review.description:""}
                userName = {data.user.firstname}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
