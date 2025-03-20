import { FavoriteActivities } from "../components/FavoriteActivities/FavoriteActivities";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import styles from "../styles/editProfile.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import edit from "../assets/img/edit.png";
import { ConvertDate } from "../utils/DateValue";

export const EditProfile: React.FC = () => {
  const user = useSelector((state) => state.user.user);
  const userid = user.user.user.userid;
  // console.log('userid :>> ', userid);
  function splitFullName(fullName) {
    if (!fullName || typeof fullName !== "string") {
      return { firstname: "", lastname: "" };
    }
    const parts = fullName.trim().split(/\s+/);
    return { firstname: parts[0], lastname: parts[1] || "" };
  }

  function setFormDate(date) {
    const birthday = ConvertDate(new Date(date));
    const monthMapping = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    return `${birthday[0]}-${monthMapping[birthday[1]]}-${String(
      birthday[2]
    ).padStart(2, "0")}`;
  }

  const [editing, setediting] = useState(false);
  const [name, setname] = useState(
    user.user.user.firstname + " " + user.user.user.lastname
  );
  const [email, setemail] = useState(user.user.user.email);
  const [phone, setphone] = useState(user.user.user.phoneno);
  const [birthday, setbirthday] = useState(setFormDate(user.user.user.birthday));
  const [images, setimages] = useState<File | null>(null);
  const [url, seturl] = useState(user.user.user.profilepic);
  const [activities, setactivities] = useState();
  const [date, setdate] = useState();

  const handleNameChange = (e) => setname(e.target.value);
  const handleEmailChange = (e) => setemail(e.target.value);
  const handlePhoneChange = (e) => setphone(e.target.value);
  const handleDateChange = (e) => {
    setdate(e.target.value); 
    setbirthday(setFormDate(e.target.value)); 
  };
  

  const handleProfilePic = (e) => {
    if (e.target.files.length > 0) {
      setimages(e.target.files[0]);
      seturl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = async () => {
    const { firstname, lastname } = splitFullName(name);
    const sendingData = new FormData();
    
    sendingData.append("firstname", firstname || "");
    sendingData.append("lastname", lastname || "");
    sendingData.append("email", email || "");
    sendingData.append("phone", phone || "");
    sendingData.append("activities", JSON.stringify(activities || []));
    sendingData.append("date", date || "");
    sendingData.append("images", images ? images : ""); 
    sendingData.append("userid",userid);

    console.log("Sending FormData:");
    for (let pair of sendingData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await fetch("/api/edit-profile", {
        method: "PATCH",
        body: sendingData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      console.log("Profile updated successfully:", result);
    } catch (error) {
      console.error("API Request Failed:", error.message);
    }
  };

  const handleCancel = () => {
    console.log("cancel called");
  };

  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.profileEditing}>
          <div className="sectionHeading">
            Edit {`${user.user.user.firstname}`}'s profile
          </div>
          <div className={styles.ProfileSection}>
            <div className={styles.profileFormLeft}>
              <div className={styles.profilePicture}>
                <img src={url} alt="" />
                <label className={styles.editIcon}>
                  <img className={styles.pencil} src={edit} alt="" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePic}
                    hidden
                  />
                </label>
              </div>
            </div>
            <div className={styles.profileFormRight}>
              <div className={styles.form}>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>What should we call you?</div>
                  <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>What's your email address?</div>
                  <input type="text" value={email} onChange={handleEmailChange} />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    On which number can we contact you?
                  </div>
                  <input type="text" value={phone} onChange={handlePhoneChange} />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    When can we wish you happy birthday?
                  </div>
                  <input type="date" value={birthday} onChange={handleDateChange} />
                </div>
              </div>
              <div>
                <FavoriteActivities user={user} setactivities={setactivities} />
              </div>
              <div className={styles.buttons}>
                <button className={styles.saveButton} onClick={handleSave}>Save</button>
                <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
