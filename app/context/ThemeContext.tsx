import useDynamicTheme from "@/hooks/useDynamicTheme";
import { createContext } from "react";

// The return type of our hook is very verbose, but we can use ReturnType
// to specify to Typescript that we want the type of whatever our hook returns.
export type ThemeStyles = ReturnType<typeof useDynamicTheme>;
const ThemeContext = createContext<ThemeStyles | null>(null);

export default ThemeContext;