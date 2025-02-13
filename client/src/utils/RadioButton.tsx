import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {altState} from "../store/RadioButton";
import {RootState} from "../store";


export const RadioButton: React.FC = () => {

const dispatch = useDispatch();
const ButtonState = useSelector((state:RootState) => state.RadioButton);

const handleRadioChange = () => {
    dispatch( 
        altState({ click: event.target.checked })
    )
    console.log('ButtonState.selected :>> ', ButtonState.selected);
}
const selectedValue = ButtonState.selected;
  return (
<>
<FormControl component="fieldset">
        <RadioGroup
          aria-label="options"
          name="options"
          value={selectedValue ? "option1" : ""} // You can use any value here
          onChange={handleRadioChange}
        >
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </FormControl>
  </>    
  );
};
