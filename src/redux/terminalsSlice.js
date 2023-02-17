import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const terminalsSlice = createSlice({
  name: "terminals",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = terminalsSlice.actions;

export default terminalsSlice.reducer;
