import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: [],
  reducers: {
    setAppointments: (state, action) => {
      return action.payload;
    },
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    removeAppointment: (state, action) => {
      const appointmentId = action.payload;
      return state.filter((appointment) => appointment.id !== appointmentId);
    },
    updateAppointment: (state, action) => {
      const updatedAppointment = action.payload;
      const index = state.findIndex((appointment) => appointment.id === updatedAppointment.id);
      if (index !== -1) {
        state[index] = updatedAppointment;
      }
    },
  },
});

export const { setAppointments, addAppointment, removeAppointment, updateAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;