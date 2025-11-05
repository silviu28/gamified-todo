import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./skillsSlice";
import tasksReducer from "./tasksSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedSkillsReducer = persistReducer(persistConfig, skillsReducer);
const persistedTasksReducer = persistReducer(persistConfig, tasksReducer);

const store = configureStore({
  reducer: {
    skills: persistedSkillsReducer,
    tasks: persistedTasksReducer
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