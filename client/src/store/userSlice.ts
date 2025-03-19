import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  login: false,
  user: null,
};

const userLoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action.payload :>> ", action.payload);
      state.user = action.payload;
      state.login = true;
    },
    logout: (state) => {
      state.user = null;
      state.login = false;
      storage.removeItem("persist:root");
    },
    addFavoriteEvent: (state, action) => {
      console.log("Adding favorite event");
      if (state.user && state.user) {
        if (state.user.fav_events) {
          state.user.fav_events = [...state.user.fav_events, action.payload];
        } else {
          state.user.fav_events = [action.payload];
        }
      }
    },
    removeFavoriteEvent: (state, action) => {
      console.log("Removing favorite event");
      if (state.user && state.user.fav_events) {
        state.user.fav_events = state.user.fav_events.filter(
          (eventId) => eventId !== action.payload
        );
      }
    },
    addEventSchedule: (state,action) => {
        state.user.user_events = [...state.user.user_events,{
          event_id:action.payload.event_id,
          status:"scheduled",
          event_date:action.payload.event_date,
        }]
    }
  },
});

export const { login, logout, addFavoriteEvent,removeFavoriteEvent,addEventSchedule } = userLoginSlice.actions;
export default userLoginSlice.reducer;
