import {DynamicCardImage} from '../DynamicCardImage/DynamicCardImage';
import { MdStar } from "react-icons/md";
import styles from '../../styles/attendedcard.module.css';
import TruncatedText from '../../utils/TruncatedText';
import type { locationCards } from "../../assets/Dummydata/LocationCardInterface";


export const AttendedCard: React.FC<{value:locationCards,rating:number}> = ({value,rating}) => {
 
    return (
        <>
        <div className={styles.attendedCard}>

        <DynamicCardImage image={value.images[0]} />
        <div className={styles.attendedcardContent}>
        <div className={styles.title}>
            {TruncatedText(value.title,3)}
        </div>
        <div className={styles.attendance}>
            3 Guests attended this event            
        </div>
        <div className={styles.date}>
            on Nov 17,2025
        </div>
        <div className={styles.rating}>
            <span> You Rated this event </span>
            {
                rating > 0 ? (<div className={styles.stars}>
                    {[...Array(rating)].map((_, i) => (
                        <MdStar key={i} className={styles.cardStars} />
                    ))}
                    </div>):(
                        <div>
                            No rating
                        </div>
                    )
            }
            
        </div>
        </div>
            </div>
        </>
    )

}