import { createSlice } from "@reduxjs/toolkit";
const initialAuthSate = { token: "", isLoggedIn: false, user: {} };
const authSlice = createSlice({
  name: "token",
  initialState: initialAuthSate,
  reducers: {
    login(state, action) {
      state.token = action.payload.token.token;
      state.isLoggedIn = true;
      state.user = action.payload.email;
    },
    logout(state) {
      state.token = "";
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
