import ThemeContext from "@/app/context/ThemeContext";
import { bottomBar } from "@/constants/styles";
import { FC, ReactNode, useContext } from "react";
import { View } from "react-native";

interface BottomBarProps {
  children?: ReactNode | ReactNode[];
};

const BottomBar: FC<BottomBarProps> = ({ children }) => {
  const style = useContext(ThemeContext);

  return (
    <View style={style.bottomBar ?? bottomBar}>
      {children}
    </View>
  );
};

export default BottomBar;