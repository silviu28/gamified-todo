import { FC } from "react";
import { Alert } from "react-native";
import SettingsOption from "../atoms/SettingsOption";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State, useStateSelector } from "@/app/store";
import Selection from "../atoms/Selection";
import { changeAccent, changeTheme } from "@/app/preferencesSlice";
import { useNavigate } from "react-router-native";
import { db } from "@/db";
import { completedTasks, notes, preferences, skills, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Background, Content, DangerZone, Group, GroupSub, GroupTitle, Intro, IntroText, OptionRow } from "../atoms";
import{ styled }from "styled-components/native";

const COLORS = ["lime", "purple", "indigo", "red", "orange", "navy", "teal", "hotpink"];

const _Content = styled.View`
  padding: 24px;
  margin-top: 72px;
`;

const SettingsPage: FC = () => {
  const [theme, accent] = useStateSelector((state) => [
    state.preferences.theme,
    state.preferences.accent
  ], shallowEqual);
  const prefs = useSelector((state: State) => state.preferences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAccentChange = async (color: string) => {
    await db.update(preferences)
      .set({ accent: color })
      .where(eq(preferences._id, 1));
    
    dispatch(changeAccent(color));
  };

  const onThemeChange = async (theme: string) => {
    await db.update(preferences)
      .set({ theme })
      .where(eq(preferences._id, 1));

    dispatch(changeTheme(theme));
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
    <Background $theme={theme}>
      <_Content>
        <IntroText>This is the settings page.</IntroText>
  
        <Group>
          <GroupTitle>Color palette</GroupTitle>
          <GroupSub>Pick another accent color.</GroupSub>
          <OptionRow>
            {COLORS.map((color) => (
              <Selection
                key={color}
                value={prefs.accent === color}
                onSelect={() => onAccentChange(color)}
                text={color}
                theme={theme}
                accent={accent}
              />
            ))}
          </OptionRow>
        </Group>
  
        <Group>
          <GroupTitle>Theme</GroupTitle>
          <GroupSub>Pick dark or light theme.</GroupSub>
          <OptionRow>
            <Selection
              value={prefs.theme === "dark"}
              onSelect={() => onThemeChange("dark")}
              text="dark"
              theme={theme}
              accent={accent}
            />
            <Selection
              value={prefs.theme === "light"}
              onSelect={() => onThemeChange("light")}
              text="light"
              theme={theme}
              accent={accent}
            />
          </OptionRow>
        </Group>
  
        <DangerZone>
          <SettingsOption
            title="Wipe everything"
            description="This will delete everything you have done on this app."
            onPress={promptWiping}
            accent={accent}
          />
          <SettingsOption
            title="Optimize storage"
            description="Clear some things that might make the experience worse."
            onPress={() => { } }
            accent={accent}
          />
        </DangerZone>
      </_Content>
    </Background>
  );
};

export default SettingsPage;