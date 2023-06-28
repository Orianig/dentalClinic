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
        },
      };
    },
  },
});

export const userData = (state) => state.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;