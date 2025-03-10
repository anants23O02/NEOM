import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/rescheduleEvent.module.css";
import { useSelector } from "react-redux";
import {useState,useEffect} from "react"
import style2 from "../styles/upcoming.module.css";
import { DivideArrays } from "../utils/DivideArrays";
import { Footer } from "../components/Footer/Footer";

export const RescheduledEvent: React.FC = () => {
  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
  const [drive, setDrive] = useState(null);
  const [travel, setTravel] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [upcomingEventArray, setUpcomingEventArray] = useState([]);
  const handleDrive = (i) => setDrive(i);
  const handleTravel = (i) => setTravel(i);
  const handleNolimit = () => {
    setTravel(null);
    setDrive(null);
  };
  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);
  useEffect(() => {
    setUpcomingEventArray(DivideArrays(filteredEvents, 5));
  }, [filteredEvents]);
  console.log(events);
  return (
    <>
      <Navbar />

      <section className="container">
        <div className={styles.header}>
          <div className="sectionHeading">Hey Charlie,</div>
          <div className="sectionContentLarge">
            We have a few similar event for you against your today's rescheduled
            event of "Round of Golf" and one of them is just starting in an hour
            and 5 minutes drive away.
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.rescheduledEvent}>
          <div className={styles.eventImage}>
            <img src={events[0].images} alt="Event" />
          </div>
          <div className={styles.eventContent}>
            <div
              className={styles.overlayContent}
              style={{ fontSize: "2.4rem", fontFamily: "IvyMode" }}
            >
              {events[0].title}
            </div>
            <div className={styles.overlayContent}>{events[0].city}</div>
            <div className={styles.overlayContent}>
              Jan 01, 2023 <br /> 7:00 AM | 11:00 AM | 3:00 PM{" "}
            </div>
            <button className={styles.rescheduleButton}>Reschedule</button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="sectionHeading">
          Some similar recommendations for you, Charlie.
        </div>
        <div className={style2.Ques}>
          <div className={style2.inputValues}>
            <div className={style2.inputValues}>
              <div
                onClick={() => handleTravel(3)}
                className={
                  travel === 3 ? style2.travelboxAtive : style2.travelbox1
                }
              >
                10 mins walking
              </div>
              <div
                onClick={() => handleTravel(2)}
                className={
                  travel === 2 ? style2.travelboxAtive2 : style2.travelbox2
                }
              >
                20 mins walking
              </div>
              <div
                onClick={() => handleTravel(1)}
                className={
                  travel === 1 ? style2.travelboxAtive3 : style2.travelbox3
                }
              >
                30 mins walking
              </div>
            </div>
            <div className={style2.inputValues}>
              <div
                onClick={() => handleDrive(3)}
                className={
                  drive === 3 ? style2.travelboxAtive : style2.travelbox1
                }
              >
                10 mins drive
              </div>
              <div
                onClick={() => handleDrive(2)}
                className={
                  drive === 2 ? style2.travelboxAtive2 : style2.travelbox2
                }
              >
                20 mins drive
              </div>
              <div
                onClick={() => handleDrive(1)}
                className={
                  drive === 1 ? style2.travelboxAtive3 : style2.travelbox3
                }
              >
                30 mins drive
              </div>
            </div>
            <div className={style2.inputValues}>
              <div onClick={handleNolimit} className={style2.Input}>
                No Limit
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{margin:"2rem 0"}}>
        {upcomingEventArray.map((upcomingEvent, i) => (
          <div key={i} className="fitCards">
            {upcomingEvent.map((event) => (
              <RecommendCard
                key={event.id}
                value={event}
                type="onlyHeart"
                favorites={data.fav_events}
              />
            ))}
          </div>
        ))}
      </section>
      <Footer/>
    </>
  );
};
