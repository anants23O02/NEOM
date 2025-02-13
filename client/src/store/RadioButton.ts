import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface RadioButtonState{
    selected: string;
}
const initialState: RadioButtonState = {
    selected:"option1",
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