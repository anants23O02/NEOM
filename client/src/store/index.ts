import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import RadiobuttonReducer from './RadioButton'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    RadioButton: RadiobuttonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
