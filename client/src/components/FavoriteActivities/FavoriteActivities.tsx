import { useState } from "react";
import { activities, likebutton, activitiesStrings } from "../../utils/ActivityImages";
import styles from "../../styles/editProfile.module.css";

export const FavoriteActivities: React.FC = ({user,setactivities}) => {
  const [selectedValues, setSelectedValues] = useState<boolean[]>(Array(activities.length).fill(false));
  const [inputValue, setInputValue] = useState<string>("");

  const setIcon = (i: number) => {
    setSelectedValues((prev) => {
      const newValues = [...prev];
      newValues[i] = !prev[i];
      const newSelectedStrings = activitiesStrings.filter((_, index) => newValues[index]);
      setInputValue(newSelectedStrings.join(", "));
      setactivities(newSelectedStrings.join(", "));
      return newValues;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    const userEnteredActivities = userInput
      .split(",")
      .map((str) => str.trim().toLowerCase())
      .filter((str) => str.length > 0);

    const newSelectedValues = activitiesStrings.map((activity) =>
      userEnteredActivities.includes(activity.toLowerCase())
    );
    setSelectedValues(newSelectedValues);
    
  };

  const handleBlur = () => {
    const newSelectedStrings = activitiesStrings.filter((_, i) => selectedValues[i]);
    setInputValue(newSelectedStrings.join(", "));
  };

  return (
    <div className={styles.formImages}>
      {activities.map((image, i) => (
        <div key={i} style={{ position: "relative", display: "inline-block" }}>
          {selectedValues[i] && (
            <>
              <div className={styles.overlay}></div>
              <img
                onClick={() => setIcon(i)}
                src={likebutton}
                alt=""
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "25%",
                  height: "25%",
                  objectFit: "contain",
                  zIndex: 2,
                }}
              />
            </>
          )}
          <img src={image} alt="" onClick={() => setIcon(i)} />
        </div>
      ))}
      <div className={styles.formValue}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Enter your favorite activities"
        />
      </div>
    </div>
  );
};
