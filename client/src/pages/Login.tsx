import { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    
    console.log("Email:", email, "Password:", password);
  }, [email, password]);

  const handleGoogleLogin = () => {
    window.location.replace("/auth/google");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = { email, password };

    try {
      const res = await fetch("/auth/login", {
        method: "POST",  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });
        if (res.ok) {
          window.location.replace("/signIn")
        }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <section className="container">
      <div className="section">
        <div className={styles.login}>
          <div className="sectionHeading">Welcome to Neom!</div>
          <div className="sectionContent">Login or Sign Up</div>
          <div className={styles.loginForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.submit} type="submit">
                Log In
              </button>
            </form>
          </div>
          <button onClick={handleSignUp} className={styles.signup}>
            Sign Up
          </button>
          <button className={styles.googleSignin} onClick={handleGoogleLogin}>
            <FcGoogle /> Login with Google
          </button>
        </div>
      </div>
    </section>
  );
};
