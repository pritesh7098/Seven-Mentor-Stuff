// javascript file for writting slice for counter app
// this file includes our state, reducers, actions

import { createSlice } from "@reduxjs/toolkit";

// slice defination

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },

  // reducers

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
  },
});

// export this logic so another comp can use it 


export const {increment, decrement, reset} = counterSlice.actions; // actions as well 

// export the function or reducer 

export default counterSlice.reducer;
