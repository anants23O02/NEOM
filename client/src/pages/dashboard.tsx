import { Navbar } from "../components/Navbar/Navbar";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { RecommendCards } from "../assets/Dummydata/serverData";
import { BigImageCard } from "../components/BigImageCard/BigImageCard";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { AttendedCard } from "../components/AttendedCard/AttendedCard";
import {AskReview} from "../components/AskReview/AskReview";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TranslatingArrows } from "../utils/TranslatiingArrows";
import { userCharlie } from "../assets/Dummydata/userData";
import globalStyles from "../styles/dashboard.module.css";
import MapComponent from "../components/MapComponent/MapComponent";
import { useSelector } from "react-redux";

export const Dashboard: React.FC = () => {
  const notification = useSelector((state) => state.notifications);
  const data = useSelector((state) => state.user.user.user);
  if (!data.fav_events) {
    data.fav_events = [];
  }
  if (!data.user_events) {
    data.user_events = [];
  }
  const events = useSelector((state) => state.events.events.events);
  let user = data.user.firstname;
  const [translate, settranslate] = useState(0);
  
  function rightTranslate() {
    const value =
      data.user_events.filter((event) => event.status === "scheduled").length -
      1.5;
    if (translate > value * -34) {
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

  useEffect(() => {
    console.log(notification);
  }, [notification]);

  console.log("data :>> ", data);
  console.log("events :>> ", events);

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="section">
          <div className="sectionHeading">{`Good morning ${user}!`}</div>
          <div className="sectionContent">
            Below listed are your itineraries, have a look to the timings and
            the location. <br /> We wish you to enjoy the activities and the
            weather!
          </div>

          <div className="sectionDescription">
            <div className={globalStyles.scheduledCards} style={{}}>
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
                {data.user_events.map((id, i) => {
                  if (id.status !== "scheduled") {
                    return;
                  }

                  const matchedCard = events.find(
                    (card) => card.id === id.event_id
                  );
                  return matchedCard ? (
                    <HorizontalCard value={matchedCard} key={i} />
                  ) : null;
                })}
              </motion.div>
            </div>
            <TranslatingArrows
              leftTranslate={leftTranslate}
              rightTranslate={rightTranslate}
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section ">
          <>
            <div className="sectionHeading">
              {`${user}, hope we understand you better`}
            </div>
            <AskReview/>
            <div className="sectionDescription"></div>
          </>
        </div>
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeading">
            {`Today Recommendation for you, ${user}!`}
          </div>

          <div className="sectionDescription">
            <div className="fitCards">
              {events.slice(4).map((card, i) => {
                return (
                  <RecommendCard
                    value={card}
                    data={{ pos: i + 1 }}
                    key={i}
                    type={"top5"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeading">
            {`${user}, here is your master journey with us so far`}
          </div>

          <div className="sectionDescription">
            <div className="fitCards">
              {data.user_events.map((event, i) => {
                if (event.status !== "attended") {
                  return;
                } else {
                  const matchedCard = events.find(
                    (card) => card.id === event.event_id
                  );
                  const user_review = data.user_reviews.find(
                    (eve) => eve.event_id === event.event_id
                  );
                  return matchedCard ? (
                    <AttendedCard
                      value={matchedCard}
                      rating={user_review ? user_review.rating : 0}
                      guests={event.guests}
                      date={event.event_date}
                      key={i}
                    />
                  ) : null;
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeadingCenter">Find events on map</div>

          <div className="sectionDescription">
            <div>
              <MapComponent />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
