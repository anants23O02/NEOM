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

export const Favorites: React.FC = () => {
  const favorites = DivideArrays(userCharlie.favortiteEvents, 5);
  console.log("favorites :>> ", favorites);
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
        <div className="section">
          <div className="sectionHeading">Good morning Charlie!</div>

          <div className="sectionContentLarge">

            You have shortlisted 8 events to join later
          </div>
        </div>
        {favorites.map((array, i) => {
          return(

            <div className="fitCards">
            {array.map((id, i) => {
              const matchedCard = LocationCards.find((card) => card.id === id);
              console.log("matchedCard :>> ", matchedCard);
              return matchedCard ? (
                <RecommendCard value={matchedCard} key={i} type={"remove"} />
              ) : null;
            })}
          </div>);
        })}
      </section>
      <section className="container">

        <div className="section ">

          <div className="sectionHeading">
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
              {data.map((value) => {
                return <BigRecommendationCard data={value} />;
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

            Top 5 activities on the island today
          </div>
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
      </section>
      <Footer />
    </>
  );
};
