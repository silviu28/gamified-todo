import UserPreferencesContext from "./context/UserPreferencesContext";
import useDynamicTheme from "@/hooks/useDynamicTheme";
import { StatusBar, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import BackButtonHandler from "@/components/BackButtonHandler";
import StarterPage from "@/components/pages/StarterPage";
import AddSkillPage from "@/components/pages/AddSkillPage";
import AddTaskPage from "@/components/pages/AddTaskPage";
import SettingsPage from "@/components/pages/SettingsPage";
import MePage from "@/components/pages/MePage";
import MeCard from "@/components/pages/MeCard";
import MainPage from "@/components/pages/MainPage";
import ThemeContext from "./context/ThemeContext";
import PersistentBackButton from "@/components/PersistentBackButton";
import SuggestThingsPage from "@/components/pages/SuggestThingsPage";
import { useStateSelector } from "./store";
import { NavigationBar } from "expo-navigation-bar";

const AppRouter = () => {
  // uncomment this is case the store breaks the app
  // AsyncStorage.clear();
  const style = useDynamicTheme();
  const theme = useStateSelector((state) => state.preferences.theme);

  return (
    <UserPreferencesContext.Provider value={{ isFirstBoot: false }}>
      <ThemeContext.Provider value={style}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <NativeRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true
            }}
            >
            <StatusBar barStyle="light-content" />
            <BackButtonHandler />
            <PersistentBackButton theme={theme} />
            <Routes>
              <Route path='*' element={<StarterPage />} />
              <Route path='/addSkill' element={<AddSkillPage />} />
              <Route path='/addTask' element={<AddTaskPage />} />
              <Route path='/main' element={<MainPage />} />
              <Route path='/settings' element={<SettingsPage />} />
              <Route path='/me' element={<MePage />} />
              <Route path='/share' element={<MeCard />} />
              <Route path='/suggest' element={<SuggestThingsPage />} />
            </Routes>
          </NativeRouter>
        </View>
      </ThemeContext.Provider>
    </UserPreferencesContext.Provider>
  );
};

export default AppRouter;