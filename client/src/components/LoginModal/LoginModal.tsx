import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { openModal, closeModal, closeIfOutside } from "../../store/modalSlice";
import { RootState } from "../../store";
import { IoIosClose } from "react-icons/io";
import styles from "../../styles/yourStyles.module.css";

interface PositionedModalProps {
  user: { profilepic?: string } | "logout";
  modalId: string; // Unique ID for each modal
}

export function PositionedModal({ user, modalId }: PositionedModalProps) {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal.modals[modalId]); // Select specific modal
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageUrl = localStorage.getItem("profilePic");

  const handleButtonClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      dispatch(
        openModal({
          id: modalId,
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        })
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        dispatch(closeIfOutside({ id: modalId, inside: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch, modalId]);

  if (!modal?.visible) return null; // Ensure modal is defined before accessing properties

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className={styles.Login}
      >
        {user !== "logout" ? (
          <img
            src={user.profilepic || imageUrl || "default-profile.png"}
            alt="Profile"
            style={{ width: "1rem", borderRadius: "100%" }}
          />
        ) : (
          "login"
        )}
      </button>

      <div
        ref={modalRef}
        className={styles.LoginModal}
        style={{ top: modal.position.top + 25, left: modal.position.left - 120 }}
      >
        <div className={styles.modalOptions}>
          <div className={styles.modalOption}>Edit Profile</div>
          <div className={styles.modalOption}>Feedback</div>
          <div className={styles.modalOption}>Settings</div>
        </div>
        <IoIosClose
          style={{ width: "1rem", marginLeft: "3.5rem", cursor: "pointer" }}
          onClick={() => dispatch(closeModal({ id: modalId }))}
        />
      </div>
    </div>
  );
}
