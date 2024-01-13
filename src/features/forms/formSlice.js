import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: ""
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        nextForm: (state, action) => {
            console.log(state, action)
            state.name = action.payload.name
        }
    }
})

export const { nextForm } = formSlice.actions;

export default formSlice.reducer;