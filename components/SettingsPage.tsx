import { bgStyle, p, padding } from "@/constants/styles";
import { FC } from "react";
import { Text, View } from "react-native";

const SettingsPage: FC = () => {
  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={p}>This is the settings page</Text>
      </View>
    </View>
  );
};

export default SettingsPage;