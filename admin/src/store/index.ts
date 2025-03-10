import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import eventReducer from "./events.ts";

const persistConfigEvents = {
  key:"events",
  storage,
}

const eventStorageReducer = combineReducers({
  events: persistReducer(persistConfigEvents,eventReducer)
})



export const store = configureStore({
  reducer: {
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
