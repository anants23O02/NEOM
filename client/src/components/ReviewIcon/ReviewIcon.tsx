import {smileyReviews} from '../../utils/SmileySvg'
import styles from "../../styles/reviewIcon.module.css";
import { useState } from "react";

const [anger, appreciation, boredom, disappointed, joy, overwhelmed] = [...smileyReviews];


export const ReviewIcon: React.FC<{value:number}> = ({value}) => {
  const [color, setColor] = useState<number>(value);
  return (
    <div className={styles.feeling}>
      <img
        src={overwhelmed}
        alt=""
        className={color === 1 ? styles.active : ""}
        // onClick={()=>{
        //     setColor(1);
        // }}
        style={{ opacity: "0.6" }}

      />
      <img
        src={joy}
        alt=""
        className={color === 2 ? styles.active : ""}
        // onClick={()=>{
        //     setColor(2);
        // }}
        style={{ opacity: "0.4" }}
      />
      <img
        src={appreciation}
        alt=""
        className={color === 3 ? styles.active : ""}
        // onClick={()=>{
        //     setColor(3);
        // }}
        style={{ opacity: "0.4" }}
      />
      <img
        src={boredom}
        alt=""
        className={color === 4 ? styles.active : ""}
        // onClick={()=>{
        //     setColor(4);
        // }}
        style={{ opacity: "0.4" }}
      />
      <img
        src={disappointed}
        alt=""
        className={color === 5 ? styles.active : ""}
        // onClick={()=>{
        //     setColor(5);
        // }}
        style={{ opacity: "0.4" }}
      />
      <img
        src={anger}
        alt=""
        className={color === 6 ? styles.active : ""}
        // onClick={()=>{
        //     setColor(6);
        // }}
        style={{ opacity: "0.6" }}
      />
    </div>
  );
};
