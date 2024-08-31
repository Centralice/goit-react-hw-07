import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterContact } = slice.actions;
export default slice.reducer;
