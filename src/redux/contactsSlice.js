import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      }),
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
