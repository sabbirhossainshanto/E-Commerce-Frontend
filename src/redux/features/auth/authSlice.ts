import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IUser } from "@/src/types/global";

type TInitialState = {
  user: null | IUser;
  token: null | string;
};
const initialState: TInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TInitialState>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logOut, setUser } = authSlice.actions;

export const userToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
