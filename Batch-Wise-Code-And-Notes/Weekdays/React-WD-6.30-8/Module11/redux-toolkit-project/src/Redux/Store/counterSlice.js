import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },

  // Reducers means actaul actions to perform

  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  reset: (state) => {
    state.value = 0;
  },
});

export const { increment, decrement, reset } = counterSlice.actions; // actions that we can use in store.

export default counterSlice.reducer; // reducer's are the actual function which we have to call whenever needed .
