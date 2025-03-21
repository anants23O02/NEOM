import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteActivities } from "../components/FavoriteActivities/FavoriteActivities";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import styles from "../styles/editProfile.module.css";
import edit from "../assets/img/edit.png";
import { ConvertDate } from "../utils/DateValue";
import { editUserData } from "../store/userSlice";
import PhoneInput from "react-phone-input-2";
import CircularProgress from '@mui/material/CircularProgress';

export const EditProfile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userid = user.user.user.userid;

  // Utility function to split full name into first and last names.
  function splitFullName(fullName: string) {
    if (!fullName || typeof fullName !== "string") {
      return { firstname: "", lastname: "" };
    }
    const parts = fullName.trim().split(/\s+/);
    return { firstname: parts[0], lastname: parts[1] || "" };
  }

  function setFormDate(date: string | Date) {
    const birthday = ConvertDate(new Date(date));
    const monthMapping: { [key: string]: string } = {
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

  // State management
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(
    user.user.user.firstname + " " + user.user.user.lastname
  );
  const [email, setEmail] = useState(user.user.user.email);
  const [phone, setPhone] = useState(user.user.user.phoneno);
  const [birthday, setBirthday] = useState(
    setFormDate(user.user.user.birthday)
  );
  const [images, setImages] = useState<File | null>(null);
  const [url, setUrl] = useState(user.user.user.profilepic);
  const [activities, setActivities] = useState(user.user.user.activities);
  const [date, setDate] = useState(user.user.user.birthday);

  // Handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setBirthday(setFormDate(e.target.value));
  };

  const handleProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImages(e.target.files[0]);
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const { firstname, lastname } = splitFullName(name);
    const sendingData = new FormData();

    sendingData.append("firstname", firstname || "");
    sendingData.append("lastname", lastname || "");
    sendingData.append("email", email || "");
    sendingData.append("phone", phone || "");
    sendingData.append("activities", activities);
    sendingData.append("date", date || "");
    sendingData.append("images", images ? images : "");
    sendingData.append("userid", userid);

    try {
      const res = await fetch("/api/edit-profile", {
        method: "PATCH",
        body: sendingData,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      const profile = result.message
        ? result.message
        : user.user.user.profilepic;
      dispatch(
        editUserData({
          firstname,
          lastname,
          email,
          phone,
          date,
          profile,
          activities,
        })
      );
      setEditing(false);
      console.log("Profile updated successfully:", result);
    } catch (error: any) {
      console.error("API Request Failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setName(user.user.user.firstname + " " + user.user.user.lastname);
    setEmail(user.user.user.email);
    setPhone(user.user.user.phoneno);
    setBirthday(setFormDate(user.user.user.birthday));
    setUrl(user.user.user.profilepic);
    setEditing(false);
  };

  return (
    <>
      <Navbar />
      <section className="container">
        <div className={styles.profileEditing}>
          {/* Loader Overlay */}
          {loading && (
            <div className={styles.loaderOverlay}>
              <div className={styles.loaderContent}>
                <CircularProgress style={{ color: "#fff" }} />
                <div className={styles.loaderText}>Saving....</div>
              </div>
            </div>
          )}

          <div className="sectionHeading">
            Edit {`${user.user.user.firstname}`}'s profile
          </div>
          <div className={styles.ProfileSection}>
            <div className={styles.profileFormLeft}>
              <div className={styles.profilePicture}>
                <div className={styles.editProfilePic}></div>
                <img src={url} alt="Profile" />
                {editing && (
                  <label className={styles.editIcon}>
                    <img className={styles.pencil} src={edit} alt="Edit" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePic}
                      hidden
                    />
                  </label>
                )}
              </div>
            </div>
            <div className={styles.profileFormRight}>
              <div className={styles.form}>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    What should we call you?
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    disabled={!editing}
                  />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    What's your email address?
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={true}
                  />
                </div>
                <div className={styles.phoneValue}>
                  <div className={styles.formQuestion}>
                    On which number can we contact you?
                  </div>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                    containerClass={styles.phoneinput}
                    inputClass={styles.valueInput}
                    disabled={!editing}
                  />
                </div>
                <div className={styles.formValue}>
                  <div className={styles.formQuestion}>
                    When can we wish you happy birthday?
                  </div>
                  <input
                    type="date"
                    value={birthday}
                    onChange={handleDateChange}
                    disabled={!editing}
                  />
                </div>
              </div>
              <div>
                <FavoriteActivities
                  user={user}
                  setactivities={setActivities}
                  editing={editing}
                />
              </div>
              <div className={styles.buttons}>
                {editing ? (
                  <>
                    <button
                      className={styles.saveButton}
                      onClick={handleSave}
                      disabled={loading}
                    >
                      Save
                    </button>
                    <button
                      className={styles.cancelButton}
                      onClick={handleCancel}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className={styles.saveButton}
                    onClick={() => setEditing(true)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
