import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./skillsSlice";
import tasksReducer from "./tasksSlice";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    tasks: tasksReducer
  }
});

export type State = ReturnType<typeof store.getState>;
export type DispatchFunction = typeof store.dispatch;

export default store;