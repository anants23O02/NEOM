import { useState } from "react";
import { activities, likebutton, activitiesStrings } from "../../utils/ActivityImages";
import styles from "../../styles/editProfile.module.css";

interface FavoriteActivitiesProps {
  user: any;
  setactivities: (activities: string) => void;
  editing: boolean;
}

export const FavoriteActivities: React.FC<FavoriteActivitiesProps> = ({
  user,
  setactivities,
  editing,
}) => {
  const initialActivities = user.user.user.activities;
  let initialActivitiesArr: string[] = [];
  let initialActivitiesString: string = "";

  if (Array.isArray(initialActivities)) {
    initialActivitiesArr = initialActivities.map((s) =>
      typeof s === "string" ? s.trim().toLowerCase() : ""
    );
    initialActivitiesString = initialActivitiesArr.join(", ");
  } else if (typeof initialActivities === "string") {
    initialActivitiesArr = initialActivities
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter((s) => s.length > 0);
    initialActivitiesString = initialActivities;
  } else {
    initialActivitiesArr = [];
    initialActivitiesString = "";
  }

  const initialSelectedValues = activitiesStrings.map((activity) =>
    initialActivitiesArr.includes(activity.toLowerCase())
  );

  const [selectedValues, setSelectedValues] = useState<boolean[]>(initialSelectedValues);
  const [inputValue, setInputValue] = useState<string>(initialActivitiesString);

  const setIcon = (i: number) => {
    if (!editing) return;

    setSelectedValues((prev) => {
      const newValues = [...prev];
      newValues[i] = !prev[i];

      const newSelectedStrings = activitiesStrings.filter((_, index) => newValues[index]);
      const newString = newSelectedStrings.join(", ");
      setInputValue(newString);
      setactivities(newString);
      return newValues;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editing) return;

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
    const newString = newSelectedStrings.join(", ");
    setInputValue(newString);
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
          disabled={!editing}
        />
      </div>
    </div>
  );
};
