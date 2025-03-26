import styles from "../../styles/signUp.module.css";
import { useState } from "react";

export const SignUp: React.FC = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    birthday: "",
    password: "",
  };
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState<File | null>(null);
  const [formData, setformData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("this")
    const sendingData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      sendingData.append(key, value);
    });

    if (images) {
      sendingData.append("images", images);
    }
    console.log(sendingData);
    const res = await fetch("/auth/signUp", {
      method: "POST",
      body: sendingData,
    });
    if(!res.ok){
      console.log("u suck man");
    }
    const redirect = await res.json();
    console.log('redirect :>> ', redirect);
    window.location.href = `${redirect.redirect}`;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImages(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setPreview(imageUrl);
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
                  {!preview && (
                    <label htmlFor="fileInput" className={styles.inputLabel}>
                      Upload Profile Picture
                    </label>
                  )}
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className={styles.fileInput}
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt="Profile Preview"
                      className={styles.imagePreview}
                    />
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    required
                    className={styles.input}
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
