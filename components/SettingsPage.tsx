import { FC } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import SettingsOption from "./SettingsOption";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import Selection from "./Selection";
import { changeAccent, changeTheme } from "@/app/preferencesSlice";
import { useNavigate } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useDynamicTheme from "@/hooks/useDynamicTheme";

const SettingsPage: FC = () => {
  const style = useDynamicTheme();
  const prefs = useSelector((state: State) => state.preferences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wipeAllAndClose = () => {
    Alert.alert("Wipe everything",
      "Are you really sure you want to do this? This process is irreversible.", [
      {
        text: "Yes",
        onPress: () => {
          AsyncStorage.clear()
                      .then(() => navigate("*"))
                      .then(() => Alert.alert("Data erase", "Wipe successful. Please open and close the app."));
        }
      },
      {
        text: "No",
        style: "cancel"
      }
    ]);
  };

  return (
    <View style={style.bg}>
      <View style={style.padding}>
        <Text style={style.p}>This is the settings page</Text>
        
        <View style={style.colFlex}>
          <Text style={style.highlight}>Color palette</Text>
          <Text style={style.sub}>Pick another accent color.</Text>
          <View style={{ gap: 1 }}>
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
              value={prefs.accent === "indigo"}
              onSelect={() => dispatch(changeAccent({ accent: "indigo" }))}
              text="indigo"
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
            <Selection
              value={prefs.accent === "navy"}
              onSelect={() => dispatch(changeAccent({ accent: "navy" }))}
              text="navy"
            />
            <Selection
              value={prefs.accent === "teal"}
              onSelect={() => dispatch(changeAccent({ accent: "teal" }))}
              text="teal"
            />
            <Selection
              value={prefs.accent === "hotpink"}
              onSelect={() => dispatch(changeAccent({ accent: "hotpink" }))}
              text="hot_pink"
            />
          </View>
        </View>

        <View style={style.colFlex}>
          <Text style={style.highlight}>Theme</Text>
          <Text style={style.sub}>Pick dark or light theme.</Text>
          <View style={style.rowFlex}>
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