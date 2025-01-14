import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import navSlice from "./slices/navSlice"

export const store = configureStore({
    reducer : {
        // Key to identify slice : imported slice / slice file
        auth: authSlice,
        nav: navSlice,
    }
})