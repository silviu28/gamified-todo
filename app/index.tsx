import { Provider } from "react-redux";
import store, { persistor } from "./store";
import AppRouter from "./AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function Page() {
  const [fontsLoaded] = useFonts({
    ["Lilex-Bold"]: require("../assets/fonts/lilex/Lilex-Bold.ttf"),
    ["Lilex-Regular"]: require("../assets/fonts/lilex/Lilex-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};
