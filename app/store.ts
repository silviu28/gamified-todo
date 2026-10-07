import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./skillsSlice";
import tasksReducer from "./tasksSlice";
import tierReducer from "./tierSlice";
import preferencesReducer from "./preferencesSlice";
import notesReducer from "./notesSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// to use the skills and tasks slices, define a store
// to persist, add a middleware property (disabled serializable check required)
const store = configureStore({
  reducer: {
    skills: skillsReducer,
    tasks: tasksReducer,
    tier: tierReducer,
    preferences: preferencesReducer,
    notes: notesReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type DispatchFunction = typeof store.dispatch;

export const useStateSelector: TypedUseSelectorHook<State> = useSelector;
export default store;