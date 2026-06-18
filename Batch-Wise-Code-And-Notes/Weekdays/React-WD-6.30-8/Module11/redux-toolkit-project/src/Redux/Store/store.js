import { configureStore } from "@reduxjs/toolkit";

// pure functions which performing actuals task

import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // this holds the actual logic 
  },
});
