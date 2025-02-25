import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import  storage  from "redux-persist/lib/storage";

const initialState = {
  login: false,
  user: null,
};

const userLoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.login = true;
    },
    logout: (state) => {
      state.user = null;
      state.login = false;
      storage.removeItem("persist:root");
    },
  },
});

export const { login, logout } = userLoginSlice.actions;
export default  userLoginSlice.reducer;
