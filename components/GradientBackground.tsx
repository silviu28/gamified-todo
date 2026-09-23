import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { bgStyle } from "@/constants/styles";
import { State } from "@/app/store";

const GradientBackground = ({ prefs, children }: { prefs: State["preferences"], children: ReactNode }) => {
  const { theme, accent } = prefs;
  return (
    <LinearGradient
      colors={ theme === "dark" 
        ? ["#000", "#111111", accent]
        : [accent, "#FFF", "#DDDDDD"] }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={bgStyle}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;