import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    //se mete en credentials y data para devolver el nuevo estado en estas
    credentials: {
      token: "",
    },
    data: {
      id: "",
      email: "",
      roleId: "",
      name: "",
      lastName: "",
    },
  },
  //reducers: especifican cómo se debe actualizar el estado de la aplicación en respuesta a acciones enviadas a Redux
  reducers: {
    //state => estado actual... action => accion que se ha despachado
    login: (state, action) => {
      let { payload } = action;
      state.credentials = {
        token: payload.token,
      },
        state.data = {
          //payload => informacion adicional a incluir en la accion
          id: payload.id,
          email: payload.email,
          roleId: payload.roleId,
          name: payload.name,
          lastName: payload.lastName,
        };
    },
    logout: (state) => {
      return {
        ...state,
        credentials: {
          token: "",
        },
        data: {
          id:"",
          email: "",
          roleId: "",
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