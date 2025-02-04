import styles from "./BigImageCard.module.css";
import image from "../../assets/img/art.jpg";
export const BigImageCard: React.FC = () => {
  return (
    <>
      <div className={styles.bigCard}>
        <img src={image} alt="" />
        <div className={styles.bigCardContent}>
          Indulges in the Finest Epicurean Cusines
        </div>
        <div className={styles.bigCardDate}>on Nov 17, 2022</div>
        <div className={styles.bigCardDesc}>
          Hi Charlie, we came to from our chef John that you didn't enjoyed the
          Epicurean cuisines yesterday. As a compensation we would like to offer
          you a free Italian cuisines as a goodwill gesture. Would you like to
          accept our request?
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
