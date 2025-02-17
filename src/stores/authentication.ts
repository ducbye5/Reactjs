import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUser } from "../types/authentication";

const DEFAULT_USER: LoginUser = {
  id: 0,
  email: "default_user@example.com",
  name: "default_user",
  permissions: [],
};

const initialState = {
  loginUser: DEFAULT_USER,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<LoginUser>) => {
      state.loginUser = action.payload;
    },
    clearLoginUser: (state) => {
      state.loginUser = DEFAULT_USER;
    },
  },
});

export const { setLoginUser, clearLoginUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
