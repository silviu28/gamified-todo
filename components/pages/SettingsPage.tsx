import { FC } from "react";
import { Alert, Text, View } from "react-native";
import SettingsOption from "../atoms/SettingsOption";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import Selection from "../atoms/Selection";
import { changeAccent, changeTheme } from "@/app/preferencesSlice";
import { useNavigate } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useDynamicTheme from "@/hooks/useDynamicTheme";
import { db } from "@/db";
import { completedTasks, notes, preferences, skills, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";

const COLORS = ["lime", "purple", "indigo", "red", "orange", "navy", "teal", "hotpink"];

const SettingsPage: FC = () => {
  const style = useDynamicTheme();
  const prefs = useSelector((state: State) => state.preferences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAccentChange = async (color: string) => {
    await db.update(preferences)
      .set({ accent: color })
      .where(eq(preferences._id, 1));
    
    dispatch(changeAccent(color));
  };

  const onWipeAll = async () => {
   await Promise.all([
      db.delete(skills),
      db.delete(tasks),
      db.delete(tasks)
        .where(eq(tasks.manuallyAssigned, true)),
      db.select({
          id: tasks.id,
          name: tasks.name,
          priority: tasks.priority,
          frequency: tasks.frequency,
          creationDate: tasks.creationDate,
        })
        .from(completedTasks)
        .innerJoin(tasks, eq(completedTasks.taskId, tasks.id))
        .groupBy(tasks.id),
      db.delete(notes),
      db.delete(preferences)
    ]);
  }

  const promptWiping = () => {
    Alert.alert("Wipe everything",
      "Are you really sure you want to do this? This process is irreversible.", [
      {
        text: "Yes",
        onPress: () => {
          onWipeAll()
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
            {COLORS.map((color) => 
                <Selection
                  key={color}
                  style={style}
                  value={prefs.accent === color}
                  onSelect={() => onAccentChange(color)}
                  text={color}
                />
            )}
          </View>
        </View>

        <View style={style.colFlex}>
          <Text style={style.highlight}>Theme</Text>
          <Text style={style.sub}>Pick dark or light theme.</Text>
          <View style={style.rowFlex}>
            <Selection
              style={style}
              value={prefs.theme === "dark"}
              onSelect={() => dispatch(changeTheme("dark"))}
              text="dark"
            />
            <Selection
              style={style}
              value={prefs.accent === "light"}
              onSelect={() => dispatch(changeTheme("light"))}
              text="light"
            />
          </View>
        </View>

        <SettingsOption
          style={style}
          title="Wipe everything"
          description="This will delete everything you have done on this app"
          onPress={promptWiping}
        />
        <SettingsOption
          style={style}
          title="Optimize storing"
          description="Clear some things that might make the experience worse."
          onPress={() => {}}/>
      </View>
    </View>
  );
};

export default SettingsPage;