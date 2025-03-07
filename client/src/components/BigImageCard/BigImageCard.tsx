import styles from "../../styles/BigImageCard.module.css";
import type {askReview} from '../../assets/Dummydata/LocationCardInterface'
export const BigImageCard: React.FC<{value:askReview}> = ({value}) => {
  // console.log('value :>> ', value);
  return (
    <>
      <div className={styles.bigCard}>
        <img src={value.image} alt="" />
        <div className={styles.imageExp}>
            <img src={value.experience} alt="" />
        </div>
        <div className={styles.bigCardContent}>
          {value.title}
        </div>
        <div className={styles.bigCardDate}>{value.date} </div>
        <div className={styles.bigCardDesc}>
          {value.description}
        </div>
        <div className={styles.bigCardFooter}>
            <button onClick={()=>{}}>
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
