import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { activities, likebutton } from "../utils/ActivityImages";
import styles from "../styles/editProfile.module.css";
import { userCharlie } from "../assets/Dummydata/userData";
import { useState } from "react";

export const EditProfile: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<boolean[]>(
    Array(activities.length).fill(false)
  );

const setIcon = (i: number) => { setSelectedValues((prev) => {
      const newValues = [...prev];
      newValues[i] = !newValues[i];
      return newValues;});
     console.log('selecetedValues :>> ', selectedValues); };

return (
  <>
    <Navbar />
      <section className="container">
        <div className={styles.profileEditing}>
          <div className="sectionHeading">Edit Charlie's profile</div>
          <div className={styles.ProfileSection}>
            <div className={styles.profileFormLeft}>
              <div className={styles.profilePicture}>
                <img src={userCharlie.profilePic} alt="" />
              </div>
            </div>
            <div className={styles.profileFormRight}>
              <div className={styles.form}>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    What should we call you?
                  </div>
                  <input type="text" />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    What's your email address?
                  </div>
                  <input type="text" />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    On which number can we contact you?
                  </div>
                  <input type="text" />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    When can we wish you happy birthday?
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.formImages}>
                {activities.map((image, i) => (
                  <div
                    key={i}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {selectedValues[i] && (
                      <>
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.5)", // Black gradient overlay
                            zIndex: 1,
                          }}
                        />
                        <img
                          src={likebutton}
                          alt=""
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)", // Center the image
                            width: "30%",
                            height: "30%",
                            objectFit: "contain",
                            zIndex: 2, // Ensure it appears above the overlay
                          }}
                        />
                      </>
                    )}
                    <img
                      src={image}
                      alt=""
                      onClick={() => setIcon(i)}
                      style={{ display: "block" }}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.formValue}>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
