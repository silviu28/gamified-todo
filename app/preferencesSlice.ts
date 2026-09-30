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
    hydratePreferences(state, action: PayloadAction<Preferences>) {
      state = {
        ...action.payload,
        loaded: true
      };
    },
    changeAccent(state, action: PayloadAction<{ accent: string }>) {
      const { accent } = action.payload;
      state.accent = accent;
    },
    skipStart(state) {
      state.showStart = !state.showStart;
    },
    changeTheme(state, action: PayloadAction<{ theme: string }>) {
      const { theme } = action.payload;
      state.theme = theme;
    },
    resetPreferences (state) {
      state.showStart = true;
      state.accent = "lime";
      state.theme = "dark";
    },
    setProfilePicture(state, action: PayloadAction<{ profilePicture: string }>) {
      const { profilePicture } = action.payload;
      state.profilePicture = profilePicture;
    },
    setThumbnail(state, action: PayloadAction<{ thumbnail: string }>) {
      const { thumbnail } = action.payload;
      state.thumbnail = thumbnail;
    },
    setUsername(state, action: PayloadAction<{ username: string }>) {
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