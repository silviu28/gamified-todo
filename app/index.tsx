import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { db } from "@/db";
import migrations from "@/drizzle/migrations";
import { useEffect } from "react";
import store from "./store";
import { completedTasks, notes, skills, tasks } from "@/db/schema";
import { hydrateSkills } from "./skillsSlice";
import { hydrateTasks } from "./tasksSlice";
import { hydrateNotes } from "./notesSlice";
import { eq } from "drizzle-orm";

export default function Page() {
  const [fontsLoaded] = useFonts({
    ["Lilex-Bold"]: require("../assets/fonts/lilex/Lilex-Bold.ttf"),
    ["Lilex-Regular"]: require("../assets/fonts/lilex/Lilex-Regular.ttf"),
  });

  // migrations run as expected, used 'any' to stop TS check
  const { success, error } = useMigrations(db, migrations as any);

  useEffect(() => {
    if (error) {
      console.error("Migration failed!", error);
    }
    if (success) {
      console.log("Migration succesful");

      (async () => {
        const [allSkills, allTasks, tasksToDo, allCompletedTasks, allNotes] = await Promise.all([
          db.select().from(skills),
          db.select().from(tasks),
          db.select().from(tasks)
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
          db.select().from(notes),
        ]);
        store.dispatch(hydrateSkills(allSkills));
        store.dispatch(hydrateTasks({
          allTasks,
          tasksToDo,
          completedTasks: allCompletedTasks
        }));
        store.dispatch(hydrateNotes(allNotes));
      })();
    }
  }, [success]);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ color: 'red', textAlign: 'center' }}>
          Migration error: {error.message}
        </Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 12 }}>Setting up database…</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
