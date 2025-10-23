import AddSkillPage from "@/components/AddSkillPage";
import AddTaskPage from "@/components/AddTaskPage";
import HomePage from "@/components/HomePage";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";

export default function Page() {
  return (
    <NativeRouter>
      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path='/addSkill' element={<AddSkillPage />} />
        <Route path='/addTask' element={<AddTaskPage />} />
      </Routes>
    </NativeRouter>
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
