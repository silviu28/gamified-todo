import AddSkillPage from "@/components/AddSkillPage";
import AddTaskPage from "@/components/AddTaskPage";
import HomePage from "@/components/HomePage";
import MainPage from "@/components/MainPage";
import { StyleSheet } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import UserPreferencesContext from "./context/UserPreferencesContext";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import store from "./store";

export default function Page() {
  return (
    <Provider store={store}>
      <UserPreferencesContext.Provider value={{ isFirstBoot: false }}>
        <NativeRouter>
          <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/addSkill' element={<AddSkillPage />} />
            <Route path='/addTask' element={<AddTaskPage />} />
            <Route path='/main' element={<MainPage skills={[]} tasks={[]} />} />
          </Routes>
        </NativeRouter>
      </UserPreferencesContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
