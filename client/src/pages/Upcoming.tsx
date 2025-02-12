import styles from "../styles/dashboard.module.css";
import { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import style2 from "../styles/upcoming.module.css";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Footer } from "../components/Footer/Footer";
import { RecommendCards } from "../assets/Dummydata/RecommendCards";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";



export const Upcoming: React.FC = () => {
//   const rows = 3;
  const [rows, setRows] = useState<number>(3)
  const filters = [
    "Stand Up Comedy",
    "RAMP Walk",
    "Box Cricket",
    "Swimming",
    "Golf Tournament",
    "Singing",
    "Talk Shows",
    "Kite Surfing",
    "Book Exhibition",
  ];
  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeading}>Hey Charlie,</div>
          <div className={styles.scheduleContentSecond}>
            Let's find something exciting about you.
          </div>
        </div>
      </section>
      <section className="container">
        <div className={style2.selection}>
          <div className={style2.selectionRow}>
            <div className={style2.Ques}>
              <div className={style2.QuesValue}>What suits your schedules?</div>
              <div className={style2.inputValues}>
                <div className={style2.Input}>
                    <CiCalendar style={{color:'red'}} />
                  <div className={style2.DatePick}>
                    Pick a date</div>
                </div>
                <div className={style2.Input}>
                    <CiLocationOn style={{color:'red'}} />
                  <div className={style2.LocationPick}>Pick a Location</div>
                </div>
              </div>
            </div>
            <div className={style2.Ques}>
              <div className={style2.QuesValue}>
                How far are you willing to travel?
              </div>
              <div className={style2.inputValues}>
                <div className={style2.inputValues}>
                  <div className={style2.travelbox1}>10 mins walking</div>
                  <div className={style2.travelbox2}>20 mins walking</div>
                  <div className={style2.travelbox3}>30 mins walking</div>
                </div>
                <div className={style2.inputValues}>
                  <div className={style2.travelbox1}>10 mins drive</div>
                  <div className={style2.travelbox2}>20 mins drive</div>
                  <div className={style2.travelbox3}>30 mins drive</div>
                </div>
                <div className={style2.inputValues}>
                  <div className={style2.Input}>No Limit</div>
                </div>
              </div>
            </div>
          </div>

          <div className={style2.selectionRow}>
            <div className={style2.Ques}>
              <div className={style2.QuesValue}>
                You can always filter out events category wise.
              </div>
              <div className={style2.inputValues}>
                {filters.map((filter) => {
                  return <div className={style2.Input}>{filter}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div className={styles.recommendCards} key={rowIndex}>
            {RecommendCards.map((card, i) => (
              <RecommendCard
                value={LocationCards[card.card]}
                type={"onlyHeart"}
                key={i}
              />
            ))}
          </div>
        ))}
      </section>
      <section className="container">
        <div className={styles.scheduledHeadingCenter}>
            <button className={style2.loadButton} onClick={()=>{
                setRows((prevRows) => prevRows+1);
            }}>
                Load More
            </button>
        </div>
      </section>

      <Footer/>
    </>
  );
};
