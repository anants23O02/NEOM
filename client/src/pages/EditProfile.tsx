import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { activities } from "../utils/ActivityImages";
import styles from "../styles/editProfile.module.css";
import { userCharlie } from "../assets/Dummydata/userData";
export const EditProfile: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.profileEditing}>
        <div className="sectionHeading">
                Edit Charlie's profile
            </div>
          <div className={styles.ProfileSection}>
            <div className={styles.profileFormLeft}>
              <div className={styles.profilePicture}>
              
                <img src={userCharlie.profilePic} alt="" />
              </div>
            </div>

            <div className={styles.profileFormRight}>
              <div className={styles.form}>
                <div className={styles.formValue} >
                  <div className={styles.formQuestion}>What should we call you?</div>
                  <input type="text" />
                </div>
                <div className={styles.formValue} >
                    <div className={styles.formQuestion}>What's your email address?</div>
                    <input type="text" />
                </div>
                <div className={styles.formValue} >
                    <div className={styles.formQuestion}>On which number can we contact you?</div>
                    <input type="text" />
                </div>
                <div className={styles.formValue} >
                    <div className={styles.formQuestion}>When can we wish you happy birthday?</div>
                    <input type="text" />
                </div>
              </div>
              <div className={styles.formImages}>
                {activities.map((image, i) => {
                  return <img src={image} alt="" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
