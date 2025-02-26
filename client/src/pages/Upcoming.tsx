import styles from "../styles/dashboard.module.css";
import { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import style2 from "../styles/upcoming.module.css";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Footer } from "../components/Footer/Footer";
import { LocationCards } from "../assets/Dummydata/LocationCards";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { UpcomingEvents } from "../assets/Dummydata/serverData";
import { DivideArrays } from "../utils/DivideArrays";
import { useSelector } from "react-redux";

export const Upcoming: React.FC = () => {
  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
  // console.log('events :>> ', events);
  const upcomingEventArray = DivideArrays(UpcomingEvents, 5);
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
        <div className="section">
          <div className="sectionHeading">{`Hey ${data.user.firstname},`}</div>

          <div className="sectionContentLarge">
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
                  <CiCalendar style={{ color: "red" }} />
                  <div className={style2.DatePick}>Pick a date</div>
                </div>
                <div className={style2.Input}>
                  <CiLocationOn style={{ color: "red" }} />
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
        <div className="fitCards">
        {events.slice(5).map((upcomingEvent) => {
          return (
              <RecommendCard value={upcomingEvent} type="onlyHeart" />
            );
          })}
          </div>
      </section>

      <section className="container">
        <div className="sectionHeadingCenter">
          <button className={style2.loadButton}>Load More</button>
        </div>
      </section>

      <Footer />
    </>
  );
};
