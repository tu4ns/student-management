import {createAsyncThunk} from "@reduxjs/toolkit";
import {clearAccount, logout} from "../Slice/auth.slice";
import {AuthService} from "../../Services/auth.service";

export const loadAccount = createAsyncThunk("auth/load-account", async (_, thunkAPI) => {

})
export const setLogoutAndClearData = createAsyncThunk("auth/log_out", async (_, thunkAPI) => {
  thunkAPI.dispatch(logout());
  thunkAPI.dispatch(clearAccount());
  return true;
});

export const refreshToken = createAsyncThunk(
  "auth/refresh-token",
    async (_, thunkAPI) => {
      try {
        const { tokens } = thunkAPI.getState().auth;
        console.log("refresh token ________________________________________-");
        return await AuthService.refreshToken(tokens.refreshToken);
      } catch (err) {
        console.log("Error refresh token ");
        thunkAPI.dispatch(setLogoutAndClearData());
        return null;
      }
    }
);