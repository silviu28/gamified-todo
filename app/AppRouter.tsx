import UserPreferencesContext from "./context/UserPreferencesContext";
import useDynamicTheme from "@/hooks/useDynamicTheme";
import { View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import BackButtonHandler from "@/components/BackButtonHandler";
import HomePage from "@/components/HomePage";
import AddSkillPage from "@/components/AddSkillPage";
import AddTaskPage from "@/components/AddTaskPage";
import SettingsPage from "@/components/SettingsPage";
import MePage from "@/components/MePage";
import MeCard from "@/components/MeCard";
import MainPage from "@/components/MainPage";
import ThemeContext from "./context/ThemeContext";
import PersistentBackButton from "@/components/PersistentBackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppRouter = () => {
  // uncomment this is case the store breaks the app
  // AsyncStorage.clear();
  const style = useDynamicTheme();

  return (
    <UserPreferencesContext.Provider value={{ isFirstBoot: false }}>
      <ThemeContext.Provider value={style}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <NativeRouter>
            <BackButtonHandler />
            <PersistentBackButton />
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
      </ThemeContext.Provider>
    </UserPreferencesContext.Provider>
  );
};

export default AppRouter;