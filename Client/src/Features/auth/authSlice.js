import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, info: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, Token } = action.payload;
      state.user = user;
      state.token = Token;
    },

    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.info = null;
    },
    updateInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setCredentials, logOut, updateInfo } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectInfo = (state) => state.auth.info;
