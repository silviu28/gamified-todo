import { createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    showStart: true,
    accent: "lime",
    theme: "dark"
  },
  reducers: {
    changeAccent: (state, action) => {
      const { accent } = action.payload;
      state.accent = accent;
    },
    skipStart: (state, _action) => {
      state.showStart = !state.showStart;
    },
    changeTheme: (state, action) => {
      const { theme } = action.payload;
      state.theme = theme;
    },
  }
});

export const { changeAccent, skipStart, changeTheme } = preferencesSlice.actions;
export default preferencesSlice.reducer;