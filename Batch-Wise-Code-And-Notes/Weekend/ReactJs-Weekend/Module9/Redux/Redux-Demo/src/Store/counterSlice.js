// This slice file basically store a slices/part of your application.

import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const counterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },  // value = 0 

  // defining actual reducer functions

  reducers: {
 
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  reset: (state) => {
    state.value = 0;
  },
}
});


export const {increment,decrement,reset} = counterSlice.actions; // actions to be performed later on 

export default counterSlice.reducer; // exported default reducers so we can use it in a store.