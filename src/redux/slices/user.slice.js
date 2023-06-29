import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {
      token: "",
    },
    data: {
      email: "",
      role: "",
      name: "",
      lastName: "",
    },
  },
  reducers: {
    login: (state, action) => {
      let { payload } = action;
      (state.credentials = {
        token: payload.token,
      }),
        (state.data = {
          email: payload.email,
          role: payload.role,
          name: payload.name,
          lastName: payload.lastName,
        });
    },
    logout: (state) => {
      return {
        ...state,
        credentials: {
          token: "",
        },
        data: {
          email: "",
          role: "",
          name: "",
          lastName: "",
        },
      };
    },
  },
});

export const userData = (state) => state.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;