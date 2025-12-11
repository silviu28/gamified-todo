import { Provider } from "react-redux";
import store, { persistor } from "./store";
import AppRouter from "./AppRouter";
import { PersistGate } from "redux-persist/integration/react";

export default function Page() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};
