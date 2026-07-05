// We are defining store inside this file

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

export const store = configureStore({
  reducer: {
    // just import your actual logic here which you are defining outside

    Counter : counterReducer // this file is coded in another file called counterSlice. 

  },
});
