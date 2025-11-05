import { bottomBar } from "@/constants/styles";
import { FC, ReactNode } from "react";
import { View } from "react-native";

interface BottomBarProps {
  children?: ReactNode | ReactNode[];
};

const BottomBar: FC<BottomBarProps> = ({ children }) => {
  return (
    <View style={bottomBar}>
      {children}
    </View>
  );
};

export default BottomBar;