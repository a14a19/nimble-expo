import { configureStore } from "@reduxjs/toolkit"
import formReducer from "../features/forms/formSlice"
import authReducer from "../features/auth/authSlice"
import registerReducer from "../features/auth/registerSlice"

const store = configureStore({
  reducer: {
    form: formReducer,
    auth: authReducer,
    register: registerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
