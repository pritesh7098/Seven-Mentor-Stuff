// Slice is nothing but a part of our code that can be used multiple times in future by other components.

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // pure buisness logic like current count, increment and decrement

  name: "counter",
  initialState: { value: 0 }, // useState(0)

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

// we have exported our functions as an action

export const { increment, decrement,reset } = counterSlice.actions
export default counterSlice.reducer // functions used for actual operations.