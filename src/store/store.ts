import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cart/cartSlice.ts";

const rootReducer = combineReducers({
    cart: CartSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;