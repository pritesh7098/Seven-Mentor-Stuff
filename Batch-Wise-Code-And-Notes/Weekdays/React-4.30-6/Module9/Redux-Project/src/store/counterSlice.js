// Step 2 : creating our reducers/ reducer functions

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 }, // useState(0)

  // This are the main fun which is responsible for everything

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

// Exporting the reducer logic

export const { increment, decrement, reset } = counterSlice.actions; // passing the action so it will communicate
export default counterSlice.reducer; // exporting the reducers so store can use it
