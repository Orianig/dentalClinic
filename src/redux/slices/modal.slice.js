import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  appointmentId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  //se establecen dos reducers, abierto y cerrado
  //me actualizan el estado
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      //almacena el id de la cita que se va a mostrar
      state.appointmentId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.appointmentId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;