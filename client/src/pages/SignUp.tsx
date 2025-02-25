import styles from "../styles/signUp.module.css";
import { useState } from "react";

export const SignUp: React.FC = async () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    birthday: "",
    password: "",
  };

  const [images, setImages] = useState<File | null>(null);
  const [formData, setformData] = useState(initialState);

  const handleSubmit = async () => {
    // console.log("registered :>> ");
    const sendingData = new FormData();
    sendingData.entries(formData).forEach(([key, value]) => {
      sendingData.append(key, value);
    });
    const res = await fetch("/auth/signUp", {
      method: "POST",
      body: sendingData,
    });
    const redirect = await res.json;
    window.location.href = `${redirect.redirect}`;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImages(e.target.files[0]);
    }
  };

  return (
    <>
      <section className="container">
        <div className="section">
          <div className="sectionHeadingCenter">Sign Up Form</div>
          <div className={styles.formContainer}>
            <div className={styles.formBox}>
              <h2 className={styles.heading}>Create an Account</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Profile Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className={styles.fileInput}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNo"
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Birthday</label>
                  <input
                    type="date"
                    name="birthday"
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
