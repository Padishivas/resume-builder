import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
  name: "Summary",
  initialState: {
    value: "",
  },
  reducers: {
    addSummary: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addSummary } = summarySlice.actions;
export default summarySlice.reducer;
