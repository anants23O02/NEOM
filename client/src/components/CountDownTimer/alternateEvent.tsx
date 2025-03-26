import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../../styles/CountdownTimer.module.css";

const CountdownTimer: React.FC = (time) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 14,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      {Object.entries(timeLeft).map(([label, value], index) => (
        <div key={index} className={styles.circleContainer}>
          <CircularProgressbar
            value={value}
            strokeWidth= {5}
            maxValue={label === "seconds" || label === "minutes" ? 59 : label === "hours" ? 23 : 30}
            text={`${value}`}
            styles={buildStyles({
              pathColor: ["#FFA500", "#007BFF", "#FFD700", "#FF4D4D"][index],
              textColor: "#FFF",
              trailColor: "rgba(255, 255, 255, 0.3)",
              strokeLinecap: "round",
            })}
          />
          <span className={styles.label}>{label.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
