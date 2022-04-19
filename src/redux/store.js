import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./slices/mainSlice";

const rootReducer = combineReducers({
  mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
