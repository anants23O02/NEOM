import styles from "../styles/login.module.css";
import { FcGoogle } from "react-icons/fc";

export const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.replace("/auth/google");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted :>> ");
    return;
  };
  const handleRegistration = () => {
    return;
  };

  return (
    <>
      <section className="container">
        <div className="section">
          <div className={styles.login}>
            <div className="sectionHeading">Welcome to Neom!</div>
            <div className="sectionContent">Login or Sign Up</div>
            <div className={styles.loginForm}>
              <form action="" onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="">Email</label>
                  <input type="text" name="email" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="">Password</label>
                  <input type="text" name="password" />
                </div>
                <button className={styles.submit} type="submit">
                  Log In
                </button>
              </form>
            <button className={styles.signup} onClick={handleRegistration}>Sign Up</button>
            </div>
            <button className={styles.googleSignin} onClick={handleLogin}>
              <FcGoogle /> Login in with Google
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
