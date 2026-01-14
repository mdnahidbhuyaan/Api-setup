import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlicel";

export const store = configureStore({
    reducer:{
        search:searchReducer
    }
})