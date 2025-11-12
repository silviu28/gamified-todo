import { FC, ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { bgStyle } from "@/constants/styles";

interface HasChildren {
  children?: ReactNode | ReactNode[];
};

const GradientBackground: FC<HasChildren> = ({ children }) => {
  return (
    <LinearGradient
    colors={['#000000', '#001100', '#00ff00ff']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={bgStyle}>
    {children}
  </LinearGradient>
  );
};

export default GradientBackground;