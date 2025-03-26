import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { altState } from "../store/RadioButton";
import { RootState } from "../store";
import { changeLanguage } from "../store/userSlice";


export const RadioButton: React.FC<{ options: string[] }> = ({ options }) => {
  const dispatch = useDispatch();
  const ButtonState = useSelector((state: RootState) => state.RadioButton);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(altState({ click: event.target.value }));
    const str = event.target.value;
    console.log(str,Number(str.replace(/[^\d]/g, "")))
    dispatch(changeLanguage(Number(str.replace(/[^\d]/g, ""))))
  };
  const fontStyles = {
    fontFamily: "BrownLight",
    fontSize: "0.8rem",
  };
  function handleClick (i) {
    dispatch(changeLanguage(i))

  }

  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="options"
          name="options"
          value={ButtonState.selected}
          onChange={handleRadioChange}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label={options[0]}
              sx={fontStyles}
              onClick={() => handleClick(1)}
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label={options[1]}
              sx={fontStyles}
              onClick={() => handleClick(2)}

            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label={options[2]}
              sx={fontStyles}
              onClick={() => handleClick(3)}

            />
          </div>
        </RadioGroup>
      </FormControl>
    </>
  );
};
