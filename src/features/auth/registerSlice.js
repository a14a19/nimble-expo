import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { userSignUp } from "../../services/api"
import authSlice from "./authSlice"

const initialState = {
  userSignupData: {
    fullName: "",
    email: "",
    // phone: "",
    token: "",
  },
}

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    handleRegister: (state, action) => {
      const { _fullName, _email, _token } = action.payload
      state.userSignupData.fullName = _fullName
      state.userSignupData.email = _email
      // state.userSignupData.phone = _phone
      state.userSignupData.token = _token

      return state.userSignupData
    },
  },
})

// export const userSignUpApi = createAsyncThunk(
//   "register/userSignUp",
//   async (payload, thunkAPI) => {
//     try {
//       console.log("AXIOS", payload)
//       return userSignUp(payload.body, payload.params, payload.options)
//         .then((res) => res.data)
//         .catch((e) => e.response.data)
//     } catch (error) {
//       console.error(error)
//       thunkAPI.rejectWithValue("Error - ", error)
//       return error.message
//     }
//   }
// )

export const { handleRegister } = registerSlice.actions

export default registerSlice.reducer
