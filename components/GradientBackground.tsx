import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { bgStyle } from "@/constants/styles";
import { State } from "@/app/store";

const GradientBackground = ({ theme, accent, children }: { theme: string, accent: string, children: ReactNode }) => {
  return (
    <LinearGradient
      colors={ theme === "dark" 
        ? ["#000", "#111111", accent]
        : [accent, "#FFF", "#DDDDDD"] }
      start={{ x: 0, y: 0 }}
      end={{ x: 1.5, y: 1.5 }}
      style={bgStyle}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;