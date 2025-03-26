import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const language = useSelector((state) => state.user.user.language)
interface RadioButtonState{
    selected: string;
}
const initialState: RadioButtonState = {
    // selected: language === 1 ? "option1":language === 2?"option2":"option3",
    selected:"option1"
}

const RadioButtonState = createSlice({
    name: "RadioButton",
    initialState,
    reducers:{
        altState: (state,action: PayloadAction<{click:string}>) => {
            state.selected = action.payload.click;
        },
    },
});

export const {altState} = RadioButtonState.actions;
export default RadioButtonState.reducer;