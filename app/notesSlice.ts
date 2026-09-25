import { Note } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [] as Note[],
    loaded: false
  },
  reducers: {
    hydrateNotes: (state, action: PayloadAction<Note[]>) => {
      state = {
        notes: action.payload,
        loaded: true
      };
    },
    addNote: (state, action) => {
      const { title, content, creationDate } = action.payload;
      const note: Note = { title, content, creationDate };
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

export const { hydrateNotes, addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;