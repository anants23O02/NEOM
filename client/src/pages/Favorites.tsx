import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/dashboard.module.css";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { RecommendCards } from "../assets/Dummydata/serverData";
import { data } from "../assets/Dummydata/serverData";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { TranslatingArrows } from "../utils/TranslatiingArrows";
import { BigRecommendationCard } from "../components/BigRecommendationCard/BigRecommendationCart";
import { userCharlie } from "../assets/Dummydata/userData";
import { DivideArrays } from "../utils/DivideArrays";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { divIcon } from "leaflet";

export const Favorites: React.FC = () => {
  const userData = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
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
    } else {
      return;
    }
  }

  return (
    <>
      <Navbar />
      <section className="container">
        {userData.fav_events.length !== 0 ? (
          <>
            <div className="section">
              <div className="sectionHeading">Good morning {userData.user.firstname}!</div>
              <div className="sectionContentLarge">
                {`You have shortlisted ${userData.fav_events.length} events to join later`}
              </div>
            </div>
            {DivideArrays(userData.fav_events, 5).map((array, i) => {
              return (
                <div className="fitCards">
                  {array.map((id, i) => {
                    const matchedCard = events.find((card) => card.id === id);
                    return matchedCard ? (
                      <RecommendCard
                        value={matchedCard}
                        key={i}
                        type={"remove"}
                      />
                    ) : null;
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <div className="section">
              <div className="sectionHeading">Good morning {userData.user.firstname}!</div>

          <div className="sectionContentLarge">
            {`You can start adding events to favorites by clicking on the hearts...`}
          </div>
          </div>
        )}  
      </section>
      <section className="container">
        <div className="section ">
          <div className="sectionHeading">
            {userData.user.firstname}, hope we understand you better
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
              {data.map((value) => {
                return <BigRecommendationCard data={value} />;
              })}
            </motion.div>
          </div>
          <TranslatingArrows
            leftTranslate={leftTranslateBig}
            rightTranslate={rightTranslateBig}
            translate = {translateBig}
            max={-70}
          />
        </div>
      </section>

      <section className="container">
        <div className="section">
          <div className="sectionHeading">
            Top 5 activities on the island today
          </div>
        </div>
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
      </section>
      <Footer />
    </>
  );
};
