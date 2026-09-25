import { Preferences } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    showStart: true,
    accent: "lime",
    theme: "dark",
    thumbnail: "",
    profilePicture: "",
    username: "user",
    loaded: false,
  },
  reducers: {
    hydratePreferences: (state, action: PayloadAction<Preferences>) => {
      state = {
        ...action.payload,
        loaded: true
      };
    },
    changeAccent: (state, action) => {
      const { accent } = action.payload;
      state.accent = accent;
    },
    skipStart: (state) => {
      state.showStart = !state.showStart;
    },
    changeTheme: (state, action) => {
      const { theme } = action.payload;
      state.theme = theme;
    },
    resetPreferences: (state) => {
      state.showStart = true;
      state.accent = "lime";
      state.theme = "dark";
    },
    setProfilePicture: (state, action) => {
      const { profilePicture } = action.payload;
      state.profilePicture = profilePicture;
    },
    setThumbnail: (state, action) => {
      const { thumbnail } = action.payload;
      state.thumbnail = thumbnail;
    },
    setUsername: (state, action) => {
      const { username } = action.payload;
      state.username = username;
    },
  }
});

export const {
  hydratePreferences,
  changeAccent,
  skipStart,
  changeTheme,
  resetPreferences,
  setProfilePicture,
  setThumbnail,
  setUsername
} = preferencesSlice.actions;

export default preferencesSlice.reducer;