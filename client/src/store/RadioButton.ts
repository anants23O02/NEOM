import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface RadioButtonState{
    selected: boolean;
}
const initialState: RadioButtonState = {
    selected:false,
}

const RadioButtonState = createSlice({
    name: "RadioButton",
    initialState,
    reducers:{
        altState: (state,action: PayloadAction<{click:string}>) => {
            state.selected = action.click;
        },
    },
});

export const {altState} = RadioButtonState.actions;
export default RadioButtonState.reducer;