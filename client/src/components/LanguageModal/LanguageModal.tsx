import React, { useState, useRef,useEffect } from "react";
import { RiGlobalLine } from "react-icons/ri";
import styles from "../../styles/loginModal.module.css";
import { AiOutlineCheck } from "react-icons/ai";

export const LanguageModal: React.FC = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [language, setlanguage] = useState(1);
  const buttonRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef(null);
  const isOpenRef = useRef(isOpen);

  const handleClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX - 120,
      });
      setIsOpen((prev) => !prev);
    }
  };
  const handleLang = (val) => {
    setlanguage(val);
  };
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

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

  return (
    <div>
      <div ref={buttonRef} style={{cursor:"pointer"}} onClick={handleClick}>
        <RiGlobalLine />
      </div>

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
            <div className={styles.modalOption}>
              <div style={{width:"4rem"}} onClick={() => handleLang(1)}>
              English
              </div>
              {language === 1 && (
                <div>
                  <AiOutlineCheck />
                </div>
              )}
            </div>
            <div className={styles.modalOption}>
              <div style={{width:"4rem"}} onClick={() => handleLang(2)}>
              Arabic
              </div>
              {language === 2 && (
                <div>
                  <AiOutlineCheck />
                </div>
              )}
            </div>
            <div className={styles.modalOption}>
              <div style={{width:"4rem"}} onClick={() => handleLang(3)}>
              French
              </div>
              {language === 3 && (
                <div>
                  <AiOutlineCheck />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
