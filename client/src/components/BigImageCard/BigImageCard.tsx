import styles from "./BigImageCard.module.css";
import image from "../../assets/img/art.jpg";
import {askReview} from '../../assets/Dummydata/LocationCardInterface'
export const BigImageCard: React.FC<askReview> = ({value}) => {
  console.log('value :>> ', value);
  return (
    <>
      <div className={styles.bigCard}>
        <img src={value.image} alt="" />
        <div className={styles.bigCardContent}>
          {value.title}
        </div>
        <div className={styles.bigCardDate}>{value.date} </div>
        <div className={styles.bigCardDesc}>
          {value.description}
        </div>
        <div className={styles.bigCardFooter}>
            <button>
                Yes I accept
            </button>
            <a href="#">
                No, Thanks
            </a>
        </div>
      </div>
    </>
  );
};
