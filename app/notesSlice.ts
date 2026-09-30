import { Note } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    allNotes: [] as Note[],
    loaded: false
  },
  reducers: {
    hydrateNotes(state, action: PayloadAction<Note[]>) {
      state = {
        allNotes: action.payload,
        loaded: true
      };
    },
    addNote(state, action: PayloadAction<Note>) {
      const note = action.payload;
      state.allNotes.push(note);
    },
    removeNote(state, action: PayloadAction<Note>) {
      const note = action.payload;
      state.allNotes = state.allNotes
        .filter(n => n.id !== note.id);
    },
  },
});

export const { hydrateNotes, addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;