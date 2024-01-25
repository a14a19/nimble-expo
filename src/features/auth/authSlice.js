import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { userSignIn, userVerifyingOTP, passwordChange, userFinalSignUp, userProfileUpdate } from "../../services/api";
import axios from "axios";

const url = process.env.EXPO_PUBLIC_API_URL;

const initialState = {
  isLoggedIn: false,
  userData: {},
  token: "",
  errors: [],
  valid: false,
  isAPIPending: false,
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

export const passwordChangeAPI = createAsyncThunk(
  "auth/update-password",
  async (payload, thunkAPI) => {
    try {
      console.log("AXIOS", payload);
      return passwordChange(payload.body, payload.params, payload.options)
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

export const userFinalSignUpAPI = createAsyncThunk(
  "auth/userFinalSignUp",
  async (payload, thunkAPI) => {
    try {
      return userFinalSignUp(payload.body, payload.params, payload.options)
        .then((res) => res.data)
        .catch((e) => e.response.data);
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue("auth final signup api - ", e);
      return e;
    }
  }
);

export const userProfileUpdateAPI = createAsyncThunk("auth/userProfileUpdate", async (payload, thunkAPI) => {
  try {
    return userProfileUpdate(payload.body, payload.params, payload.options).then((res) => res.data).catch((e) => e.response);
  } catch (e) {
    thunkAPI.rejectWithValue("auth profile pic api - ", e)
    return e
  }
});

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
      state.isAPIPending = false;
    });
    builder.addCase(userSignInApi.rejected, (state, { payload }) => {
      console.log("Rejected", payload);
      state.isAPIPending = false;
    });
    builder.addCase(userSignInApi.pending, (state, { payload }) => {
      console.log("Pending", payload);
      state.isAPIPending = true;
    });
    // ! verify otp
    builder.addCase(userVerifyingOtpAPI.fulfilled, (state, { payload }) => {
      // console.log("Fulfilled", payload);
      state.isAPIPending = false;
    });
    builder.addCase(userVerifyingOtpAPI.rejected, (state, { payload }) => {
      // console.log("Rejected", payload);
      state.isAPIPending = false;
    });
    builder.addCase(userVerifyingOtpAPI.pending, (state, { payload }) => {
      // console.log("Pending", payload);
      state.isAPIPending = true;
    });
    // ! password change 
    builder.addCase(passwordChangeAPI.fulfilled, (state, { payload }) => {
      console.log("Fullfilled", payload);
      state.valid = payload.status;
      state.isAPIPending = false;
    });
    builder.addCase(passwordChangeAPI.rejected, (state, { payload }) => {
      console.log("Rejected", payload);
      state.isAPIPending = false;
    });
    builder.addCase(passwordChangeAPI.pending, (state, { payload }) => {
      console.log("Pending", payload);
      state.isAPIPending = true;
    });
    // ! user preferences sign up
    builder.addCase(userFinalSignUpAPI.fulfilled, (state, { payload }) => {
      state.isAPIPending = false;
      state.userData = payload.data;
      // console.log("user form updated fulfilled", payload)
    })
    builder.addCase(userFinalSignUpAPI.pending, (state, { payload }) => {
      state.isAPIPending = true;
      // console.log("user form updated pending", payload)
    })
    builder.addCase(userFinalSignUpAPI.rejected, (state, { payload }) => {
      state.isAPIPending = false;
      // console.log("user form updated rejected", payload)
    })
    // ! profile pic update
    builder.addCase(userProfileUpdateAPI.fulfilled, (state, { payload }) => {
      state.isAPIPending = false;
      if (payload.status) {
        state.userData = payload.data;
        state.isLoggedIn = true;
      }
      // console.log("user form updated fulfilled", payload)
    });
    builder.addCase(userProfileUpdateAPI.pending, (state, { payload }) => {
      state.isAPIPending = true;
      // console.log("user form updated pending", payload)
    });
    builder.addCase(userProfileUpdateAPI.rejected, (state, { payload }) => {
      state.isAPIPending = false;
      // console.log("user form updated rejected", payload)
    });
  },
});

export const { handleLogin } = authSlice.actions;

export default authSlice.reducer;
