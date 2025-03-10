import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import  storage  from "redux-persist/lib/storage";


const initialState = {
    events:null,
};

const eventSlice = createSlice({
    name: "eventSlice",
    initialState,
    reducers: {
        setEvents: (state,action) => {
            state.events = action.payload.events;
        }
    },
});

export const {setEvents} = eventSlice.actions;
export default eventSlice.reducer;