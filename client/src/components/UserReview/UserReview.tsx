import { MdStar } from "react-icons/md";
import styles from "../../styles/UserReview.module.css";
import style2 from "../../styles/eventpage.module.css";
import TruncatedText from "../../utils/TruncatedText";
import { UserReviews } from "../../assets/Dummydata/LocationCardInterface";
import { useState } from "react";

export const UserReview: React.FC<{ data: UserReviews }> = ({ data }) => {
  const [width, setWidth] = useState("19.89vw");
  const [num, setnum] = useState(30);

  const handleClick = () => {
    setWidth("30vw");
    setnum(70);
  };
  const handleClickLess =() => {
    setWidth('19.89vw');
    setnum(30);
  }
  return (
    <div className={styles.Review} style={{ width: width }}>
      <div className={styles.reviewHeader}>
        <div className={styles.userProfilePic}>
          <img src={data.image} alt="no image" />
        </div>
        <div className={styles.userDetails}>
          <h4>{data.name}</h4>
          <div>{data.date}</div>
        </div>
      </div>
      <div className={styles.reviewContent}>
        {num == 30 ?TruncatedText(data.review, num):`${data.review}`}
      </div>
      <div className={styles.reviewStars}>
        <div className={style2.headingstars}>
          {[...Array(5)].map((_, i) => {
            return (
              <div className={style2.stars}>
                <MdStar key={i} className={style2.cardStars} />
              </div>
            );
          })}
          <span>5.0</span>
        </div>
        {num === 30 ? (
          <div className={styles.readMore} onClick={handleClick}>
            <a href="#">Read More</a>
          </div>
        ) : (
          <div className={styles.readMore} onClick={handleClickLess}>
            <a href="#">Read Less</a>
          </div>
        )}
      </div>
    </div>
  );
};
