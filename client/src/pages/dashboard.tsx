import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/dashboard.module.css";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { RecommendCards } from "../assets/Dummydata/RecommendCards";
import { askReview } from "../assets/Dummydata/askreview";
import { BigImageCard } from "../components/BigImageCard/BigImageCard";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { AttendedCard } from "../components/AttendedCard/AttendedCard";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { TranslatingArrows } from "../utils/TranslatiingArrows";
import MapComponent from "../components/MapComponent/MapComponent";

export const Dashboard: React.FC = () => {
  console.log(RecommendCards[0].pos);
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

  const upcomingEvents = [0, 1, 2];
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
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeading}>Good morning Charlie!</div>
          <div className={styles.scheduleContent}>
            Below listed are your itineraries, have a look to the timings and
            the location. <br /> We wish you to enjoy the activities and the
            weather!
          </div>

          <div className={styles.scheduledCards} style={{}}>
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
              {LocationCards.slice(1).map((card, i) => {
                return <HorizontalCard value={card} key={i} />;
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
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeading}>
            Charlie, hope we understand you better
          </div>
          <div className={styles.ratingcard}>
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
              {askReview.map((value) => {
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
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeading}>
            Today Recommendation for you, Charlie!
          </div>
          <div className={styles.recommendCards}>
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
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeading}>
            Today Recommendation for you, Charlie!
          </div>
          <div className={styles.recommendCards}>
            {LocationCards.map((card, i) => {
              return <AttendedCard value={card} key={i} />;
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeadingCenter}>
            Find events on map
          </div>
          <div style={{ marginTop: "2rem" }}>
            <MapComponent />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
