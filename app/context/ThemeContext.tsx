import { createContext } from "react";
import { StyleSheet } from "react-native";

const ThemeContext = createContext<typeof StyleSheet.create | null>(null);

export default ThemeContext;