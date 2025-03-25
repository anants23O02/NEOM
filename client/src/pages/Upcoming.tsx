import styles from "../styles/dashboard.module.css";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import style2 from "../styles/upcoming.module.css";
import { RecommendCard } from "../components/RecommendCards/RecommendCard";
import { Footer } from "../components/Footer/Footer";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { DivideArrays } from "../utils/DivideArrays";
import { calcLocation } from "../utils/DistanceCalc";
import { divIcon } from "leaflet";

export const Upcoming: React.FC = () => {
  const [drive, setDrive] = useState(null);
  const [travel, setTravel] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState();
  const [upcomingEventArray, setUpcomingEventArray] = useState([]);
  const data = useSelector((state) => state.user.user.user);
  const { location } = data.user;
  const events = useSelector((state) => state.events.events.events);
  const [userLocation, setUserlocation] = useState();
  const [error, setError] = useState(false);
  const locationOptions = [
    [28.04875, 34.72042],
    [28.0445, 34.70836],
    [28.05006, 34.71408],
    [28.05272, 34.71925],
  ];
  const handleLocation = (e) => {
    const loc = e.target.value;
    setError(false);
    console.log(loc);
    setUserlocation(locationOptions[loc]);
  };

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
        filtered = distance
          .filter((v) => v[0] > 1)
          .map((v) => v[1]);
      }
      const filtereve = events.filter((eve) => filtered.includes(eve.id))
      setFilteredEvents(filtereve);
    } else {
      setError(true);
    }
  };

  console.log("calcLocation :>> ", calcLocation(location, events));
  const handleNolimit = () => {
    setTravel(null);
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
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {error && (
                    <div
                      style={{
                        fontSize: "0.6rem",
                        marginRight: "0.5rem",
                        width: "10rem",
                        marginTop: "-12px",
                        color: "red",
                      }}
                    >
                      Please Select a Location
                    </div>
                  )}
                  <div className={style2.container}>
                    <div className={style2.selectWrapper}>
                      <CiLocationOn className={style2.icon} />
                      <select
                        defaultValue=""
                        onChange={(e) => handleLocation(e)}
                        className={style2.select}
                      >
                        <option value="" disabled hidden>
                          Pick a Location
                        </option>
                        <option value={0} className={style2.option}>
                          Docks
                        </option>
                        <option className={style2.option} value={1}>
                          Park
                        </option>
                        <option className={style2.option} value={2}>
                          Hotel
                        </option>
                        <option className={style2.option} value={3}>
                          Beach
                        </option>
                      </select>
                    </div>
                  </div>
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
