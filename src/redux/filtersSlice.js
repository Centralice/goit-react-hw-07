import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

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

const selectFilters = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters)
    );
  }
);
