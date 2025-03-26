import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import globalStyles from "../styles/dashboard.module.css";

import { LocationCards } from "../assets/Dummydata/LocationCards";
import { RecommendCards } from "../assets/Dummydata/serverData";
import { userCharlie } from "../assets/Dummydata/userData";

import { Navbar } from "../components/Navbar/Navbar";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { BigImageCard } from "../components/BigImageCard/BigImageCard";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { AttendedCard } from "../components/AttendedCard/AttendedCard";
import {AskReview} from "../components/AskReview/AskReview";
import { Footer } from "../components/Footer/Footer";
import MapComponent from "../components/MapComponent/MapComponent";

import { TranslatingArrows } from "../utils/TranslatiingArrows";

export const Dashboard: React.FC = () => {
  const notification = useSelector((state) => state.notifications);
  const data = useSelector((state) => state.user.user.user);
  const language = useSelector((state) => state.user.user.language);
  if (!data.fav_events) {
    data.fav_events = [];
  }
  if (!data.user_events) {
    data.user_events = [];
  }
  const events = useSelector((state) => state.events.events.events);
  let user = data.user.firstname;
  const [translate, settranslate] = useState(0);
  const vwToPx =Math.floor( (38 / 100) * window.innerWidth); 
  const value = data.user_events.filter((event) => event.status === "scheduled").length -2;
  function rightTranslate() {
  
    if (translate > value * -1*vwToPx) { 
        const newtranslate = translate - vwToPx - 15; 
        if (newtranslate > 0 ){
          settranslate(0)
        }
        settranslate(newtranslate);
        console.log(newtranslate, "right");
      
    } else {
      return;
    }
  }

  function leftTranslate() {
    if (translate < 0 || translate == -1*(vwToPx + 15)) {
      const newtranslate = translate + vwToPx + 15;
      if (newtranslate > 0 ){
        settranslate(0)
      }
      settranslate(newtranslate);
      console.log(newtranslate,"left")

 
    } else if (translate === 0) {
   
      return;

    }
  }

  useEffect(() => {
    console.log(notification);
  }, [notification]);

  console.log("data :>> ", data);
  console.log("events :>> ", events);
  console.log("language",language)
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
                animate={{ x: `${translate}px` }}
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
              translate={translate}
              max = {value * -1*vwToPx}
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section ">
          <>
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
