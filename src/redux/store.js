import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/forms/formSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        auth: authReducer,
    }
});

export default store;