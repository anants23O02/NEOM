import styles from "../styles/dashboard.module.css";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import style2 from "../styles/upcoming.module.css";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Footer } from "../components/Footer/Footer";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { DivideArrays } from "../utils/DivideArrays";

export const Upcoming: React.FC = () => {
  const [drive, setDrive] = useState(null);
  const [travel, setTravel] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState();
  const [upcomingEventArray, setUpcomingEventArray] = useState([]);

  const data = useSelector((state) => state.user.user.user);
  const events = useSelector((state) => state.events.events.events);

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);

  useEffect(() => {
    setUpcomingEventArray(DivideArrays(filteredEvents, 5));
  }, [filteredEvents]);

  const handleFilter = (i) => {
    const filtered =
      i === 0
        ? events
        : events.filter((event) => event.category === filters[i]);
    setFilteredEvents(filtered);
    setSelectedFilters(i);
  };

  const handleDrive = (i) => setDrive(i);
  const handleTravel = (i) => setTravel(i);
  const handleNolimit = () => {
    setTravel(null);
    setDrive(null)
  };

  const filters = [
    "All",
    "Golf",
    "Water Sports",
    "Aerial Sports",
    "Beach",
    "Mountain",
  ];

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="section">
          <div className="sectionHeading">{`Hey ${
            data?.user?.firstname || "User"
          },`}</div>
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
          </div>
          <div className={style2.selectionRow}>
            <div className={style2.Ques}>
              <div className={style2.QuesValue}>
                You can always filter out events category wise.
              </div>
              <div className={style2.inputValues}>
                {filters.map((filter, i) => (
                  <div
                    key={i}
                    onClick={() => handleFilter(i)}
                    className={
                      selectedFilters === i ? style2.InputActive : style2.Input
                    }
                  >
                    {filter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
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
      <section className="container">
        <div className="sectionHeadingCenter">
          <button className={style2.loadButton}>Load More</button>
        </div>
      </section>
      <Footer />
    </>
  );
};
