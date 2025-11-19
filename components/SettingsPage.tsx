import { bgStyle, colFlex, highlight, p, padding, rowFlex, sub } from "@/constants/styles";
import { FC } from "react";
import { Alert, Text, View } from "react-native";
import SettingsOption from "./SettingsOption";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import Selection from "./Selection";
import { changeAccent, changeTheme } from "@/app/preferencesSlice";

const SettingsPage: FC = () => {
  const prefs = useSelector((state: State) => state.preferences);
  const dispatch = useDispatch();

  const wipeAllAndClose = () => {
    Alert.alert("Wipe everything",
      "Are you really sure you want to do this? This process is irreversible.",
    [
      {
        text: "Yes",
        onPress: () => {
          Alert.alert("Wipe everything", "The app will now close.");
          // ... execute wipe
        }
      },
      {
        text: "No",
        style: "cancel"
      }
    ]);
  };

  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={p}>This is the settings page</Text>
        
        <View style={colFlex}>
          <Text style={highlight}>Color palette</Text>
          <Text style={sub}>Pick another accent color.</Text>
          <View style={rowFlex}>
            <Selection
              value={prefs.accent === "lime"}
              onSelect={() => dispatch(changeAccent({ accent: "lime" }))}
              text="lime"
            />
            <Selection
              value={prefs.accent === "purple"}
              onSelect={() => dispatch(changeAccent({ accent: "purple" }))}
              text="purple"
            />
            <Selection
              value={prefs.accent === "red"}
              onSelect={() => dispatch(changeAccent({ accent: "red" }))}
              text="red"
            />
            <Selection
              value={prefs.accent === "orange"}
              onSelect={() => dispatch(changeAccent({ accent: "orange" }))}
              text="orange"
            />
          </View>
        </View>

        <View style={colFlex}>
          <Text style={highlight}>Theme</Text>
          <Text style={sub}>Pick dark or light theme.</Text>
          <View style={rowFlex}>
            <Selection
              value={prefs.theme === "dark"}
              onSelect={() => dispatch(changeTheme({ theme: "dark" }))}
              text="dark"
            />
            <Selection
              value={prefs.accent === "light"}
              onSelect={() => dispatch(changeTheme({ accent: "light" }))}
              text="light"
            />
          </View>
        </View>

        <SettingsOption
          title="Wipe everything"
          description="This will delete everything you have done on this app"
          onPress={wipeAllAndClose}
        />
        <SettingsOption
          title="Optimize storing"
          description="Clear some things that might make the experience worse."
          onPress={() => {}}/>
      </View>
    </View>
  );
};

export default SettingsPage;