import ThemeContext from "@/app/context/ThemeContext";
import { FC, useContext } from "react";
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
  const style = useContext(ThemeContext);

  return (
    <View style={style.rowFlex}>
      <View style={style.colFlex}>
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