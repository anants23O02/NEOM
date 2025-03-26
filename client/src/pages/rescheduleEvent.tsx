import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/rescheduleEvent.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import style2 from "../styles/upcoming.module.css";
import { DivideArrays } from "../utils/DivideArrays";
import { Footer } from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { RescheduleFormModal } from "../components/RescheduleFormModal/RescheduleFormModal";
import { ConvertDate } from "../utils/DateValue";
import CountdownTimer from "../components/CountDownTimer/alternateEvent";
import { calcLocation } from "../utils/DistanceCalc";

export const RescheduledEvent: React.FC = () => {
  const notificationData = useSelector((state) => state.notifications);
  if (notificationData.data.length === 0) {
    window.location.href = "/dashboard";
  }

  console.log(notificationData.data);
  const { eventid } = useParams();
  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
  const event = events.find((event) => event.id === Number(eventid));
  const notification = notificationData.data.find(
    (event) => event.event_id === Number(eventid)
  );
  const rescDate = ConvertDate(new Date(notification.rescheduled_date));
  console.log(data);
  const [drive, setDrive] = useState(null);
  const [travel, setTravel] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [upcomingEventArray, setUpcomingEventArray] = useState([]);
  const [form, setform] = useState(false);
  const userLocation = [28.04875, 34.72042];
  const [error, setError] = useState(false);
  const [cut, setCut] = useState(5);
  const handleNolimit = () => {
    setFilteredEvents(events);
    setCut(events.length);
    setTravel(null);
  };

  const handleTravel = (i) => {
    if (userLocation) {
      setTravel(i);
      console.log(userLocation, "userLocation");
      const distance = calcLocation(userLocation, events);
      console.log(distance, "distance on selecting filter");
      let filtered = [];
      if (i === 3 || i === 4) {
        filtered = distance
          .filter((v) => v[0] > 0 && v[0] < 0.4)
          .map((v) => v[1]);
      } else if (i === 2 || i === 5) {
        filtered = distance
          .filter((v) => v[0] > 0.4 && v[0] < 1)
          .map((v) => v[1]);
      } else if (i === 1 || i === 6) {
        filtered = distance.filter((v) => v[0] > 1).map((v) => v[1]);
      }
      const filtereve = events.filter((eve) => filtered.includes(eve.id));
      setFilteredEvents(filtereve);
      setCut(events.length);
    } else {
      setError(true);
    }
  };

  const handleReschedule = () => {
    setform(true);
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

      <RescheduleFormModal
        userData={data}
        notification={notification}
        event={event}
        isOpen={form}
        onClose={setform}
      />

      <section className="container">
        <div className={styles.header}>
          <div className="sectionHeading">{`Hey ${data.user.firstname},`}</div>
          <div className="sectionContentLarge">
            {`We have a few similar event for you against your today's rescheduled
            event of "${event.title}" and one of them is just starting in an hour
            and 5 minutes drive away.`}
          </div>
        </div>
      </section>

      <section className="container">
        <div className={styles.rescheduledEvent}>
          <div className={styles.eventImage}>
            <img src={event.images} alt="Event" />
          </div>
          <div className={styles.eventContent}>
            <div
              className={styles.overlayContent}
              style={{ fontSize: "2.4rem", fontFamily: "IvyMode" }}
            >
              {event.title}
            </div>

            <div className={styles.overlayContent}>{event.city}</div>
            <div className={styles.overlayContent}>
              {`${rescDate[1]} ${rescDate[2]}, ${rescDate[0]}`} <br /> 7:00 AM |
              11:00 AM | 3:00 PM{" "}
            </div>
            <button
              onClick={handleReschedule}
              className={styles.rescheduleButton}
            >
              Reschedule
            </button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="sectionHeading">
          Some similar recommendations for you, {data.user.firstname}.
        </div>
        <div className={style2.Ques}>
          <div className={style2.inputValues}>
            <div className={style2.inputValues}>
              <div
                onClick={() => {
                  if (!error) {
                    handleTravel(3);
                  }
                }}
                className={
                  travel === 3 ? style2.travelboxAtive : style2.travelbox1
                }
              >
                10 mins walking
              </div>
              <div
                onClick={() => {
                  if (!error) {
                    handleTravel(2);
                  }
                }}
                className={
                  travel === 2 ? style2.travelboxAtive2 : style2.travelbox2
                }
              >
                20 mins walking
              </div>
              <div
                onClick={() => {
                  if (!error) {
                    handleTravel(1);
                  }
                }}
                className={
                  travel === 1 ? style2.travelboxAtive3 : style2.travelbox3
                }
              >
                30 mins walking
              </div>
            </div>
            <div className={style2.inputValues}>
              <div
                onClick={() => {
                  if (!error) {
                    handleTravel(4);
                  }
                }}
                className={
                  travel === 4 ? style2.travelboxAtive : style2.travelbox1
                }
              >
                10 mins drive
              </div>
              <div
                onClick={() => {
                  if (!error) {
                    handleTravel(5);
                  }
                }}
                className={
                  travel === 5 ? style2.travelboxAtive2 : style2.travelbox2
                }
              >
                20 mins drive
              </div>
              <div
                onClick={() => {
                  if (!error) {
                    handleTravel(6);
                  }
                }}
                className={
                  travel === 6 ? style2.travelboxAtive3 : style2.travelbox3
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

      <section className="container" style={{ margin: "2rem 0" }}>
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
      <Footer />
    </>
  );
};
