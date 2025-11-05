import { createContext } from "react";

interface ContextValue {
  isFirstBoot: boolean;
};

const UserPreferencesContext = createContext<ContextValue>({
  isFirstBoot: true
});

export default UserPreferencesContext;