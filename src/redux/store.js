import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice"

export const store  = configureStore({
    reducer : {
        cart : CardSlice
    }
})