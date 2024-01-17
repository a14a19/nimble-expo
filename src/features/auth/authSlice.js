import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { userSignIn } from '../../services/api';
import axios from 'axios';

const url = process.env.EXPO_PUBLIC_API_URL

const initialState = {
    isLoggedIn: false
}

export const userSignInApi = createAsyncThunk("auth/userSignIn", async (payload, thunkAPI) => {
    try {
        // console.log("AXIOS", payload);
        return userSignIn(payload.body, payload.params, payload.options).then((res) => res.data).catch((e) => e.response.data);
    } catch (e) {
        thunkAPI.rejectWithValue("Error - ", e)
        return e;
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        handleLogin: (state) => {
            console.log(state)
            state.isLoggedIn = !state.isLoggedIn
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userSignInApi.fulfilled, (state, { payload }) => {
            console.log("Fulfilled", payload)
        })
        builder.addCase(userSignInApi.rejected, (state, { payload }) => {
            console.log("Rejected", payload)
        })
        builder.addCase(userSignInApi.pending, (state, { payload }) => {
            console.log("Pending", payload)
        })
    }
})

export const { handleLogin } = authSlice.actions;

export default authSlice.reducer;