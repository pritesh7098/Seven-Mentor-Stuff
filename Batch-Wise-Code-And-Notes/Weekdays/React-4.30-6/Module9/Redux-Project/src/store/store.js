// Step 1 : creating a store for storing all the logic

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

export const store = configureStore({
  reducer: {
    // I dont have info about anything , ask this reducers/ ask this fun abt that


    counter : counterReducer // now store having all the powers

  },
});
