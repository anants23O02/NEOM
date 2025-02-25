import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import modalReducer from "./modalSlice";
import RadiobuttonReducer from "./RadioButton";
import LoginReducer from "./userSlice";
import eventReducer from "./events.ts";
const persistConfig = {
  key: "user",
  storage,
};
const persistConfigEvents = {
  key:"events",
  storage,
}

const eventStorageReducer = combineReducers({
  events: persistReducer(persistConfigEvents,eventReducer)
})

const userReducer = combineReducers({
  user: persistReducer(persistConfig, LoginReducer),
});

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    RadioButton: RadiobuttonReducer,
    user: userReducer,
    events: eventStorageReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
