/*
toolkit is used to make code clean and dont need to explain all thing like redux it make easy to write
redux code 


1. configureStore

2. createSlice

3. export action




*/

import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer },
});

export const privacyActions = privacySlice.actions;
export const counterActions = counterSlice.actions;
export default counterStore;
