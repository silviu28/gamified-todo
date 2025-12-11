import { FC, ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { bgStyle } from "@/constants/styles";
import { useSelector } from "react-redux";
import { State } from "@/app/store";

interface HasChildren {
  children?: ReactNode | ReactNode[];
};

const GradientBackground: FC<HasChildren> = ({ children }) => {
  const { theme, accent } = useSelector((state: State) => state.preferences);

  return (
    <LinearGradient
      colors={ theme === "dark" 
        ? ["#000", "#001100", accent]
        : ["#FFF", "#FFDDFF", accent] }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={bgStyle}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;