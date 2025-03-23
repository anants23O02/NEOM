import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import createIDBStorage from "redux-persist-indexeddb-storage";

import modalReducer from "./modalSlice";
import RadiobuttonReducer from "./RadioButton";
import LoginReducer from "./userSlice";
import eventReducer from "./events.ts";
import notificationReducer from "./notificationSlice.ts";

// Persist config for user and events (using localStorage)
const persistConfig = {
  key: "user",
  storage,
};

const persistConfigEvents = {
  key: "events",
  storage,
};

const eventStorageReducer = combineReducers({
  events: persistReducer(persistConfigEvents, eventReducer),
});

const userReducer = combineReducers({
  user: persistReducer(persistConfig, LoginReducer),
});

// Create a new storage instance using IndexedDB for notifications
const idbStorage = createIDBStorage("myAppDatabaseNotifications");

const persistConfigNotifications = {
  key: "notifications",
  storage: idbStorage,
};

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    RadioButton: RadiobuttonReducer,
    user: userReducer,
    events: eventStorageReducer,
    notifications: persistReducer(persistConfigNotifications, notificationReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
