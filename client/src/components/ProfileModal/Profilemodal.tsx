import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/loginModal.module.css";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
const ProfileModal = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  const handleClick = (event) => {
    event.stopPropagation();
    const rect = event.target.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY + 10,
      left: rect.left + window.scrollX - 120,
    });
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpenRef.current) {
        console.log("Scroll detected! Closing modal...");
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.LoginButton}>
        <button ref={buttonRef} onClick={handleClick} className={styles.Login}>
          {user !== "logout" ? (
            <div
              style={{
                width: "2.7rem",
                height: "1.5rem",
                borderRadius: "30%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                padding: "0 0.2rem ",
                gap:"20%",
                justifyContent: "center",
                alignItems:"center",
              }}
            >
              <IoReorderThreeOutline />
              <img
                src={user.profilepic}
                alt="Profile"
                style={{ width: "1rem", borderRadius: "100%", height: "1rem" }}
              />
            </div>
          ) : (
            "login"
          )}
        </button>
        {isOpen && (
          <div
            ref={modalRef}
            className={styles.LoginModal}
            style={{
              top: position.top,
              left: position.left,
              position: "absolute",
            }}
          >
            <div className={styles.modalOptions}>
              <Link
                to="/edit-profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className={styles.modalOption}>Edit Profile</div>
              </Link>
              <Link
                to="/feedback"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className={styles.modalOption}>Feedback</div>
              </Link>
              <Link
                to="/settings"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className={styles.modalOption}>Settings</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileModal;
