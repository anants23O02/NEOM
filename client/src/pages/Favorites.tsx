import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/dashboard.module.css";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { askReview } from "../assets/Dummydata/askreview";
import { BigImageCard } from "../components/BigImageCard/BigImageCard";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { AttendedCard } from "../components/AttendedCard/AttendedCard";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { TranslatingArrows } from "../utils/TranslatiingArrows";
import { BigRecommendationCard } from "../components/BigRecommendationCard/BigRecommendationCarT";

export const Favorites: React.FC = () => {
  const [translateBig, settranslateBig] = useState(0);
  function rightTranslateBig() {
    if (translateBig > 2 * -60) {
      const newtranslate = translateBig - 60;
      settranslateBig(newtranslate);
    } else {
      return;
    }
  }

  function leftTranslateBig() {
    if (translateBig < 0) {
      const newtranslate = translateBig + 60;
      settranslateBig(newtranslate);
      setActive("left");
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
          <div className={styles.scheduleContentValues}>
            You have shortlisted 8 events to join later
          </div>
        </div>
        <div className={styles.recommendCards}>
          {LocationCards.map((card, i) => {
            return <RecommendCard value={card} key={i} />;
          })}
        </div>
        <div className={styles.recommendCards}>
          {LocationCards.map((card, i) => {
            return <RecommendCard value={card} key={i} />;
          })}
        </div>
      </section>
      <section className="container">
        <div className={styles.scheduledSectionInsider}>
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
                return <BigRecommendationCard />;
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
        <div className={styles.scheduledSectionInsider}>
          <div className={styles.scheduledHeading}>Top 5 activities on the island today</div>
        </div>
        <div className={styles.recommendCards}>
          {LocationCards.map((card, i) => {
            return <RecommendCard value={card} key={i} />;
          })}
        </div>
      </section>
      <Footer/>
    </>
  );
};
