import { Theme } from "@/types";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

interface SettingsOptionProps {
  style: Theme,
  title: string,
  description: string,
  actionName?: string
  onPress: () => void;
};

const SettingsOption: FC<SettingsOptionProps> = ({
  style,
  title,
  description,
  actionName = "Execute",
  onPress
}) => {

  return (
    <View style={[style.rowFlex, { width: "90%", justifyContent: "space-between" }]}>
      <View style={[style.colFlex, { flex: 1 }]}>
        <Text style={style.highlight}>{title}</Text>
        <Text style={style.sub}>{description}</Text>
      </View>
      <Pressable onPress={onPress}>
        <Text style={style.highlight}>{actionName}</Text>
      </Pressable>
    </View>
  );
};

export default SettingsOption;