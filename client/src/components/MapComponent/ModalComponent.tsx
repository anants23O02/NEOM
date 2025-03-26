import React from "react";
import styles from '../../styles/MapModalComponent.module.css'
import { ConvertDate } from "../../utils/DateValue";

const ModalComponent: React.FC<{ location: any; onClose?:()=>void;}> = ({ event}) => {
  const startDateArray = ConvertDate(new Date(event.start_date));
  const endDateArray = ConvertDate(new Date(event.end_date));
  return (
    <div style={{
        width:"22rem",
        height:'15vh',
      background: "white",
      padding: "0.8rem",
      borderRadius: "10px",
      zIndex: 1000,
      display:'flex',
      flexDirection:'row',
      textAlign:"left",
      justifyContent:"center",
      alignItems:"center"
    }} >
        <div className={styles.modalImage}>
            <img src={event.images} alt="" />
        </div>
        <div className={styles.modalContent}>
            <k> {event.title}</k>
            <div className={styles.time}>
            {`${startDateArray[1]} ${startDateArray[2]}, ${startDateArray[3]}:${startDateArray[4]} AM - ${endDateArray[1]} ${endDateArray[2]}, ${endDateArray[3]}:${endDateArray[4]} PM`}
            </div>
            <div className={styles.review}>
                   {`${event.stars}`} {`(${event.reviews} reviews)`} 
            </div>
        </div>
    </div>
  );
};

export default ModalComponent;
