import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/rescheduleEvent.module.css";
import { useSelector } from "react-redux";
import {useState,useEffect} from "react"
import style2 from "../styles/upcoming.module.css";
import { DivideArrays } from "../utils/DivideArrays";
import { Footer } from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { RescheduleFormModal } from "../components/RescheduleFormModal/RescheduleFormModal";
import { ConvertDate } from "../utils/DateValue";
import CountdownTimer from "../components/CountDownTimer/alternateEvent";


export const AlternateEvent: React.FC = () => {



  const notificationData = useSelector((state) => state.notifications);
  if(notificationData.data.length === 0){
    window.location.href = "/dashboard";
  }

  console.log(notificationData.data)
  const {eventid} = {eventid:23};
  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);
  const event = events.find((event) => event.id === Number(eventid))
  const notification = notificationData.data.find((event) => event.event_id === Number(eventid))
  const rescDate = ConvertDate(new Date(notification.rescheduled_date))
  console.log(data)
  const [drive, setDrive] = useState(null);
  const [travel, setTravel] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [upcomingEventArray, setUpcomingEventArray] = useState([]);
  const [form,setform] = useState(false);


  const handleDrive = (i) => setDrive(i);
  const handleTravel = (i) => setTravel(i);
  const handleNolimit = () => {
    setTravel(null);
    setDrive(null);
  };
  const handleReschedule = () => {
    setform(true);
  }

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

      <RescheduleFormModal userData={data} notification={notification} event={event} isOpen={form} onClose={setform}/>

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
              {`${rescDate[1]} ${rescDate[2]}, ${rescDate[0]}`} <br /> 
            </div>
            <div>
                <CountdownTimer/>
            </div>
            <button onClick={handleReschedule} className={styles.rescheduleButton}>Yes I'm in</button>
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
