import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { userSignIn, userVerifyingOTP } from "../../services/api";
import axios from "axios";

const url = process.env.EXPO_PUBLIC_API_URL;

const initialState = {
  isLoggedIn: false,
  userData: {},
  token: "",
  errors: [],
};

export const userSignInApi = createAsyncThunk(
  "auth/userSignIn",
  async (payload, thunkAPI) => {
    try {
      console.log("AXIOS", payload);
      return userSignIn(payload.body, payload.params, payload.options)
        .then((res) => res.data)
        .catch((e) => e.response.data);
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue("Error - ", e);
      return e;
    }
  }
);

export const userVerifyingOtpAPI = createAsyncThunk(
  "auth/userVerifyingOTP",
  async (payload, thunkAPI) => {
    try {
      return userVerifyingOTP(payload.body, payload.params, payload.options)
        .then((res) => res.data)
        .catch((e) => e.response.data);
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue("Error - ", e);
      return e;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (state) => {
      console.log(state);
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignInApi.fulfilled, (state, { payload }) => {
      console.log("Fulfilled", payload);
      if (payload.errors) {
        state.errors = payload.errors;
        state.isLoggedIn = payload.status;
        state.userData = {};
        state.token = "";
      } else {
        state.userData = payload.data;
        state.errors = [];
        state.token = payload.token;
        state.isLoggedIn = payload.status;
      }
    });
    builder.addCase(userSignInApi.rejected, (state, { payload }) => {
      console.log("Rejected", payload);
    });
    builder.addCase(userSignInApi.pending, (state, { payload }) => {
      console.log("Pending", payload);
    });
    builder.addCase(userVerifyingOtpAPI.fulfilled, (state, { payload }) => {
      console.log("Fulfilled", payload);
    });
    builder.addCase(userVerifyingOtpAPI.rejected, (state, { payload }) => {
      console.log("Rejected", payload);
    });
    builder.addCase(userVerifyingOtpAPI.pending, (state, { payload }) => {
      console.log("Pending", payload);
    });
  },
});

export const { handleLogin } = authSlice.actions;

export default authSlice.reducer;
