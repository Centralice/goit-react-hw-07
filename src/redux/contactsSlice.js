import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      },
      prepare: (contact) => {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
