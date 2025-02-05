import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/dashboard.module.css";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import {askReview} from '../assets/Dummydata/askreview';
import { BigImageCard } from "../components/BigImageCard/BigImageCard";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { AttendedCard } from "../components/AttendedCard/AttendedCard";
import { motion } from "framer-motion";
import { useState } from "react";
import {TranslatingArrows} from '../utils/TranslatiingArrows';

export const Dashboard: React.FC = () => {
  console.log('askReview :>> ', askReview);
  const [translate, settranslate] = useState(0);
  const [translateBig, settranslateBig] = useState(0);
  function rightTranslateBig() {
    if (translateBig > -2 * 34) {
      // console.log("translate :>> ", translate);
      const newtranslate = translateBig - 34;
      settranslateBig(newtranslate);
  } else {
      return;
  }
  }

  function leftTranslateBig() {
    if (translateBig < 0) {
      // console.log("translate :>> ", translate);
      const newtranslate = translateBig + 34;
      settranslateBig(newtranslate);
      setActive('left');
    } else {
      return;
    }
  }

  const upcomingEvents = [0, 1, 2];
  function rightTranslate() {
    if (translate > -2 * 34) {
      // console.log("translate :>> ", translate);
      const newtranslate = translate - 34;
      settranslate(newtranslate);
  } else {
      return;
  }
  }

  function leftTranslate() {
    if (translate < 0) {
      // console.log("translate :>> ", translate);
      const newtranslate = translate + 34;
      settranslate(newtranslate);
      setActive('left');
    } else {
      return;
    }
  }
  // console.log("LocationCards :>> ", LocationCards);
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
              {LocationCards.map((card,i) => {
                return <HorizontalCard value={card} key={i} />;
              })}
            </motion.div>
          </div>
          <TranslatingArrows leftTranslate={leftTranslate} rightTranslate={rightTranslate} />
        </div>
      </section>
      <section className="container">
        <div className={styles.ratingcards}>
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
            return(
              <BigImageCard value={value} />
            )
          })}
            </motion.div>

          </div>
          <TranslatingArrows leftTranslate={leftTranslateBig} rightTranslate={rightTranslateBig} />

        </div>
      </section>
      <RecommendCard />
      <AttendedCard />
    </>
  );
};
