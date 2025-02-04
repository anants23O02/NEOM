import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/dashboard.module.css";
import {HorizontalCard} from '../components/HorizontalCard/HorizontalCard'
import {LocationCards} from '../assets/Dummydata/LocationCards'
export const Dashboard: React.FC = () => {
  const upcomingEvents = [0,1,2]
  console.log('LocationCards :>> ', LocationCards);
  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.scheduledSection}>
          <div className={styles.scheduledHeading}>Good morning Charlie!</div>
          <div className={styles.scheduleContent}>
            Below listed are your itineraries, have a look to the timings and
            the location. <br /> We wish you to enjoy the activities and the weather!
          </div>
          <HorizontalCard value={LocationCards[0]} />
        </div>
      </section>
    </>
  );
};
