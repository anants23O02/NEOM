import { Navbar } from "../components/Navbar/Navbar";
import globalStyles from "../styles/dashboard.module.css";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { RecommendCards } from "../assets/Dummydata/serverData";
import { BigImageCard } from "../components/BigImageCard/BigImageCard";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { AttendedCard } from "../components/AttendedCard/AttendedCard";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { TranslatingArrows } from "../utils/TranslatiingArrows";
import MapComponent from "../components/MapComponent/MapComponent";
import { userCharlie } from "../assets/Dummydata/userData";
import { askReview } from "../assets/Dummydata/LocationCardInterface";

export const Dashboard: React.FC = () => {
  const [translate, settranslate] = useState(0);
  const [translateBig, settranslateBig] = useState(0);
  function rightTranslateBig() {
    if (translateBig > -36) {
      const newtranslate = translateBig - 36;
      settranslateBig(newtranslate);
    } else {
      return;
    }
  }

  function leftTranslateBig() {
    if (translateBig < 0) {
      const newtranslate = translateBig + 36;
      settranslateBig(newtranslate);
    } else {
      return;
    }
  }

  function rightTranslate() {
    if (translate > -2 * 34) {
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
      <Navbar />
      <section className="container">
        <div className="section">
          <div className="sectionHeading">Good morning Charlie!</div>
          <div className="sectionContent">
            Below listed are your itineraries, have a look to the timings and
            the location. <br /> We wish you to enjoy the activities and the
            weather!
          </div>

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
              {userCharlie.scheduledEvents.map((id:number, i:number) => {
                const matchedCard = LocationCards.find(
                  (card) => card.id === id
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
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeading">
            Charlie, hope we understand you better
          </div>
          <div className={globalStyles.ratingcard}>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: " max-content",
                gap: "15px",
              }}
              animate={{ x: ` ${translateBig}vw` }}
              transition={{ duration: 0.5 }}
            >
              {userCharlie.AskReview.map((value:askReview) => {
                return <BigImageCard value={value} />;
              })}
            </motion.div>
          </div>
          <TranslatingArrows
            leftTranslate={leftTranslateBig}
            rightTranslate={rightTranslateBig}
          />
        </div>
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeading">
            Today Recommendation for you, Charlie!
          </div>
          <div className="fitCards">
            {RecommendCards.map((card, i) => {
              return (
                <RecommendCard
                  value={LocationCards[card.card]}
                  data={card}
                  key={i}
                  type={"top5"}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeading">
            Charlie, here is your master journey with us so far
          </div>
          <div className="fitCards">
            {userCharlie.attendedEvents.map((event, i) => {
              const matchedCard = LocationCards.find(
                (card) => card.id === event.eventId
              );
              return matchedCard ? (
                <AttendedCard
                  value={matchedCard}
                  rating={event.rating}
                  key={i}
                />
              ) : null;
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeadingCenter">Find events on map</div>
          <div style={{ marginTop: "2rem" }}>
            <MapComponent />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
