import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  visible: boolean;
  position: { top: number; left: number };
}

const initialState: ModalState = {
  visible: false,
  position: { top: 0, left: 0 },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ top: number; left: number }>) => {
      state.visible = true;
      state.position = action.payload;
    },
    closeModal: (state) => {
      state.visible = false;
    },
    closeIfOutside:(state, action: PayloadAction<{ inside: boolean }>) => {
        if (!action.payload.inside) {
            state.visible = false;
          }
    },
  },
});

export const { openModal, closeModal,closeIfOutside } = modalSlice.actions;
export default modalSlice.reducer;
