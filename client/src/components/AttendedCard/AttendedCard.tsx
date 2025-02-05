import {DynamicCardImage} from '../DynamicCardImage/DynamicCardImage';
import { MdStar } from "react-icons/md";
import styles from '../../styles/attendedcard.module.css';
export const AttendedCard: React.FC = () => {
    return (
        <>
        <DynamicCardImage />
        <div className={styles.attendedcardContent}>
        <div className={styles.title}>
            Round of Golf
        </div>
        <div className={styles.attendance}>
            3 Guests attended this event            
        </div>
        <div className={styles.date}>
            on Nov 17,2025
        </div>
        <div className={styles.rating}>
            <span> You Rated this event </span>
            <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
            <MdStar key={i} className={styles.cardStars} />
          ))}
            </div>
        </div>
        </div>
        </>
    )

}