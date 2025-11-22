import AddSkillPage from "@/components/AddSkillPage";
import AddTaskPage from "@/components/AddTaskPage";
import HomePage from "@/components/HomePage";
import MainPage from "@/components/MainPage";
import { NativeRouter, Route, Routes } from "react-router-native";
import UserPreferencesContext from "./context/UserPreferencesContext";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import SettingsPage from "@/components/SettingsPage";
import BackButtonHandler from "@/components/BackButtonHandler";
import MePage from "@/components/MePage";
import MeCard from "@/components/MeCard";
import { View } from "react-native";

export default function Page() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserPreferencesContext.Provider value={{ isFirstBoot: false }}>
          <View style={{ flex: 1, backgroundColor: "black" }}>
            <NativeRouter>
              <BackButtonHandler />
              <Routes>
                <Route path='*' element={<HomePage />} />
                <Route path='/addSkill' element={<AddSkillPage />} />
                <Route path='/addTask' element={<AddTaskPage />} />
                <Route path='/main' element={<MainPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/me' element={<MePage />} />
                <Route path='/share' element={<MeCard />} />
              </Routes>
            </NativeRouter>
          </View>
        </UserPreferencesContext.Provider>
      </PersistGate>
    </Provider>
  );
};
