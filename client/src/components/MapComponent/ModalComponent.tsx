import React from "react";
import styles from '../../styles/MapModalComponent.module.css'

const ModalComponent: React.FC<{ location: any; onClose?:()=>void;}> = ({ location }) => {
  return (
    <div style={{
        width:"14rem",
        height:'6rem',
      background: "white",
      padding: "0.8rem",
      borderRadius: "10px",
      zIndex: 1000,
      display:'flex',
      flexDirection:'row'
    }} >
        <div className={styles.modalImage}>
            <img src={location.image} alt="" />
        </div>
        <div className={styles.modalContent}>
            <p> {location.name}</p>
            <div className={styles.date}>
                Nov 10 - 29
            </div>
            <div className={styles.time}>
                10:30 AM - 7:30 PM
            </div>
            <div className={styles.review}>
                   4.9 (123 reviews) 
            </div>
        </div>
    </div>
  );
};

export default ModalComponent;
