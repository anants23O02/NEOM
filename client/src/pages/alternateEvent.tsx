import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/rescheduleEvent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import style2 from "../styles/upcoming.module.css";
import { DivideArrays } from "../utils/DivideArrays";
import { Footer } from "../components/Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { RescheduleFormModal } from "../components/RescheduleFormModal/RescheduleFormModal";
import { ConvertDate } from "../utils/DateValue";
import CountdownTimer from "../components/CountDownTimer/alternateEvent";
import { calcLocation } from "../utils/DistanceCalc";
import { addEventSchedule } from "../store/userSlice";
import { clearNotification } from "../store/notificationSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const AlternateEvent: React.FC = () => {
  const { eveid } = useParams();
  const notificationData = useSelector((state) => state.notifications);
  const [Ndate, setNdate] = useState("2025-02-25T08:16:59.836Z");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dispatchEvent = useDispatch();
  // const { eventid } = { eventid: 22 };
  const user = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
  const nonscheduledEvents = events.filter(
    (event) =>
      !user.user_events.some((userEvent) => userEvent.event_id === event.id)
  );
  // const event = events.find((event) => event.id === Number(eventid));
  // if (!event) {
  //   return <p>Event not found</p>;
  // }

  const rescDate = ConvertDate(new Date(Ndate));

  const [travel, setTravel] = useState<number | null>(null);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [upcomingEventArray, setUpcomingEventArray] = useState([]);
  const [error, setError] = useState(false);
  const [cut, setCut] = useState(5);
  const userLocation = [28.04875, 34.72042];

  const handleNolimit = () => {
    setFilteredEvents(events);
    setCut(events.length);
    setTravel(null);
  };

  const handleTravel = (i: number) => {
    if (userLocation) {
      setTravel(i);
      const distance = calcLocation(userLocation, events);
      let filtered: number[] = [];

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

      const filteredEventsList = events.filter((eve) =>
        filtered.includes(eve.id)
      );
      setFilteredEvents(filteredEventsList);
      setCut(events.length);
    } else {
      setError(true);
    }
  };

  const handleReschedule = async () => {
    console.log(eveid);
    // dispatch(clearNotification(Number(eveid)));
    window.location.href = `/event/${22}`;
  };

  useEffect(() => {
    const notification = notificationData.data.filter(
      (notif) => notif.event_id === Number(eveid)
    );
    console.log(notification);
    if (notification) {
      console.log(notification, "found notification");
      setNdate(notification[0].rescheduled_date);
    }
    
    setUpcomingEventArray(DivideArrays(filteredEvents, 5));
    return () => {
      dispatch(clearNotification(Number(eveid)));
    }
  }, [filteredEvents]);

  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.header}>
          <div className="sectionHeading">{`Hey ${user.user.firstname},`}</div>
          <div className="sectionContentLarge">
            {`We have a few similar events for you against your rescheduled event "${event.title}". One of them is starting soon, just an hour away and a 5-minute drive.`}
          </div>
        </div>
      </section>
      <section className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className={styles.swiperContainer}
        >
          {nonscheduledEvents.map((event, i) => {
            return (
              <SwiperSlide key={i}>
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
                    <div
                      className={styles.overlayContent}
                    >{`${rescDate[1]} ${rescDate[2]}, ${rescDate[0]}`}</div>
                    <div>
                      <CountdownTimer />
                    </div>
                    <button
                      onClick={handleReschedule}
                      className={styles.rescheduleButton}
                    >
                      Yes, I'm in
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="container">
        <div className="sectionHeading">
          Some similar recommendations for you, {user.user.firstname}.
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
                favorites={user.fav_events}
              />
            ))}
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};
