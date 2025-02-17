import { userCharlie } from "../assets/Dummydata/userData";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import Styles from "../styles/feedback.module.css";
import { FeedbackElement } from "../components/FeedbackElement/FeedbackElement";
import { Speedometer } from "../components/speedometer/speedometer";
import { smileyReviews } from "../utils/SmileySvg"; // anger, appreciation, etc.

export const Feedback: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* <section className="container"> */}
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
          <Speedometer value={0.5} />
        </div>
      </div>
      {/* </section> */}

      <section className="container">
        <div className={Styles.cardWrapper}>
          <div className="section">
            <div className="sectionHeading">
              Hi Charlie, <br /> here are the glimpses of your feedback shared
              with us
            </div>
          </div>
          {userCharlie.attendedEvents.map((value, i) => {
            const matchedCards = LocationCards.find(
              (event) => event.id === value.eventId
            );
            console.log("matchedCards :>> ", matchedCards);
            return matchedCards ? (
              <FeedbackElement
                card={matchedCards}
                index={value.rating > 0 ? 6 - value.rating : value.rating}
              />
            ) : null;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
