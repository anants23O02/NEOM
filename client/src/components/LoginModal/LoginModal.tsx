import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { openModal, closeModal, closeIfOutside } from "../../store/modalSlice";
import { RootState } from "../../store";
import styles from "../../styles/loginModal.module.css";
import { IoIosClose } from "react-icons/io";

export function PositionedModal({ user }) {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null); // Declare modalRef
  const imageUrl = localStorage.getItem("profilePic");
  const handleButtonClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      dispatch(
        openModal({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        })
      );
    }
  };

  const handleClickOutside = (event: React.MouseEvent) => {
    const insideModal =
      modalRef.current?.contains(event.target as Node) ?? false;
    const insideButton =
      buttonRef.current?.contains(event.target as Node) ?? false;
    dispatch(closeIfOutside({ inside: insideModal || insideButton }));
  };

  const top = modal.position.top + 25;
  const left = modal.position.left - 120;
  return (
    <>
      <div className={styles.LoginButton} onClick={handleClickOutside}>

        <button
          ref={buttonRef}
          onClick={handleButtonClick}
          className={styles.Login}
        >
          {user !== "logout" ? (
            <img
              src={user.profilepic}
              alt="Profile"
              style={{ width: "1rem", borderRadius: "100%" }}
            />
          ) : (
            "login"
          )}
        </button>

        {modal.visible && (
          <div className={styles.LoginModal} style={{ top: top, left: left }}>
            <div className={styles.modalOptions}>
              <div className={styles.modalOption}>Edit Profile</div>
              <div className={styles.modalOption}>Feedback</div>
              <div className={styles.modalOption}>Settings</div>
            </div>
            <IoIosClose
              style={{ width: "1rem", marginLeft: "3.5rem" }}
              onClick={() => dispatch(closeModal())}
            />
          </div>
        )}

      </div>
    </>
  );
}
