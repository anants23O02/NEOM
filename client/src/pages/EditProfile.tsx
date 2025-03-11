import { FavoriteActivities } from "../components/FavoriteActivities/FavoriteActivities";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import styles from "../styles/editProfile.module.css";
import { userCharlie } from "../assets/Dummydata/userData";
import { useState } from "react";
import { useSelector } from "react-redux";
import edit from "../assets/img/edit.png";


export const EditProfile: React.FC = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user :>> ", user);
  const handleSave = () => {
    console.log('saved called');
  }
  const handleCancel = () => {
    console.log('cancel called');
  }
  const handleProfilePic= () => {
    console.log('handle profile pic change');
  }
  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.profileEditing}>
          <div className="sectionHeading">Edit Charlie's profile</div>
          <div className={styles.ProfileSection}>
            <div className={styles.profileFormLeft}>
              <div className={styles.profilePicture}>
                <div className={styles.editProfilePic} onClick={handleProfilePic} >
                </div>
                <img src={user.user.user.profilepic} alt="" />
                <img src={edit} alt="" />
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
              <div>
                <FavoriteActivities user={user} />
              </div>
              <div className={styles.buttons}>
                <button className={styles.saveButton} onClick={handleSave} >Save</button>
                <button className={styles.cancelButton} onClick={handleCancel} >Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
