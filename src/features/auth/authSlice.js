import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        handleLogin: (state) => {
            console.log(state)
            state.isLoggedIn = !state.isLoggedIn
        }
    }
})

export const { handleLogin } = authSlice.actions;

export default authSlice.reducer;