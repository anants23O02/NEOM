import { TranslatingArrows } from "../../utils/TranslatiingArrows";
import { motion } from "framer-motion";
import globalStyles from "../../styles/dashboard.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BigImageCard } from "../BigImageCard/BigImageCard";

export const AskReview: React.FC = () => {
  const [Questions, setQuestions] = useState([]); // Ensure state is initialized
  const data = useSelector((state) => state.user.user.user);
  const [translateBig, settranslateBig] = useState(0);
  const [no,setno] = useState(false);
  function rightTranslateBig() {
    if (translateBig > -36) {
      const newtranslate = translateBig - 36;
      settranslateBig(newtranslate);
    } else {
      return;
    }
  }

  function leftTranslateBig() {
    if (translateBig < 0) {
      const newtranslate = translateBig + 36;
      settranslateBig(newtranslate);
    } else {
      return;
    }
  }

  const fetchQuestions = async () => {
    if (!data?.user?.userid) return; // Avoid fetching if userid is missing
    try {
      console.log("Fetching API...");
      const res = await fetch(`/api/ask-questions?userid=${data.user.userid}`, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch questions");
      }

      const result = await res.json();
      setQuestions(result.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [data]); // Runs when `data` changes

  useEffect(() => {
    console.log("Updated Questions:", Questions);
  }, [Questions]);

  return (
    <>
      {!no && (
        <>
          {" "}
          <div className="sectionHeading">
            {`${data.user.firstname}, hope we understand you better`}
          </div>
          <div className={globalStyles.ratingcard}>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: " max-content",
                gap: "15px",
              }}
              animate={{ x: ` ${translateBig}vw` }}
              transition={{ duration: 0.5 }}
            >
              {Questions.map((value, i) => {
                return <BigImageCard value={value} key={i} setno={setno} />;
              })}
            </motion.div>
          </div>
          {Questions.length >= 3 && (
            <TranslatingArrows
              leftTranslate={leftTranslateBig}
              rightTranslate={rightTranslateBig}
              // translate = {translateBig}
            />
          )}
        </>
      )}
    </>
  );
};
