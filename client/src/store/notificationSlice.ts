import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notification {
  id: string;
  message: string;
}

interface NotificationState {
  data: Notification[];
}

const initialState: NotificationState = {
  data: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<Notification>) => {
      state.data.push(action.payload);
    },
    clearNotification: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (notif) => notif.event_id !== action.payload
      );
    },
    clearAllNotifications: (state) => {
      state.data = [];
    },
  },
});

export const { setNotification, clearNotification, clearAllNotifications } =
  notificationSlice.actions;
export default notificationSlice.reducer;
