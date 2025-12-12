import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./skillsSlice";
import tasksReducer from "./tasksSlice";
import tierReducer from "./tierSlice";
import preferencesReducer from "./preferencesSlice";
import notesReducer from "./notesSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from 'redux-persist';

const storage = AsyncStorage;

const persistedSkillsReducer = persistReducer({ key: "skills", storage }, skillsReducer);
const persistedTasksReducer = persistReducer({ key: "tasks", storage }, tasksReducer);
const persistedTierReducer = persistReducer({ key: "tier", storage }, tierReducer);
const persistedPreferencesReducer = persistReducer({ key: "preferences", storage }, preferencesReducer);
const persistedNotesReducer = persistReducer({ key: "notes", storage }, notesReducer);

// to use the skills and tasks slices, define a store
// to persist, add a middleware property (disabled serializable check required)
const store = configureStore({
  reducer: {
    skills: persistedSkillsReducer,
    tasks: persistedTasksReducer,
    tier: persistedTierReducer,
    preferences: persistedPreferencesReducer,
    notes: persistedNotesReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});


export type State = ReturnType<typeof store.getState>;
export type DispatchFunction = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;