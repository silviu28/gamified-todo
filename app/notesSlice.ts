import { Note } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [] as Note[],
  },
  reducers: {
    addNote: (state, action) => {
      const { note } = action.payload;
      if (!state.notes.find(n => n.title === note.title)) {
        state.notes.push(note);
      }
    },
    removeNote: (state, action) => {
      const { note } = action.payload;
      const { title } = note;
      state.notes = state.notes
      .filter(n => n.title !== title);
    },
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;