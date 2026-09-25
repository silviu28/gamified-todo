import { Provider } from "react-redux";
import store, { persistor } from "./store";
import AppRouter from "./AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { db } from "@/db";
import migrations from "@/drizzle/migrations";
import { useEffect } from "react";

export default function Page() {
  const [fontsLoaded] = useFonts({
    ["Lilex-Bold"]: require("../assets/fonts/lilex/Lilex-Bold.ttf"),
    ["Lilex-Regular"]: require("../assets/fonts/lilex/Lilex-Regular.ttf"),
  });

  const { success, error } = useMigrations(db, migrations);

  useEffect(() => {
    if (error) {
      console.error("Migration failed!", error);
    }
    if (success) {
      console.log("Migration succesful");
    }
  }, [success, error]);

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
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};
