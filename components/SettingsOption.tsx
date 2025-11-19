import { colFlex, highlight, rowFlex, sub } from "@/constants/styles";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

interface SettingsOptionProps {
  title: string,
  description: string,
  actionName?: string
  onPress: () => void;
};

const SettingsOption: FC<SettingsOptionProps> = ({
  title,
  description,
  actionName = "Execute",
  onPress
}) => {
  return (
    <View style={rowFlex}>
      <View style={colFlex}>
        <Text style={highlight}>{title}</Text>
        <Text style={sub}>{description}</Text>
      </View>
      <Pressable onPress={onPress}>
        <Text style={highlight}>{actionName}</Text>
      </Pressable>
    </View>
  );
};

export default SettingsOption;