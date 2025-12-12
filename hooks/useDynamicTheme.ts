import { useSelector } from "react-redux";
import { State } from "../app/store";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useFonts } from "expo-font";

// We can create our own top-level hook functions by combining hooks provided by React, Redux, etc.
// this will be used at the top-level of the "App" component in order to pass down
// to all children the theme using React's Context API.
// One downside of this specific hook is that it's strongly coupled
// with our Redux store, which might not be ideal in most use cases.
// Isolating components from the store will be difficult
const useDynamicTheme = () => {
  const { accent, theme } = useSelector((state: State) => state.preferences);

  // The Platform.select() method allows us to branch our code based on the user's platform,
  // without having to write it by ourselves.
  // (for example, you would need to write this shadow in both Kotlin/Java and Swift)
  const shadow = Platform.select({
    ios: {
        shadowColor: accent,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: .4,
        shadowRadius: 6
      },
      android: {
        elevation: 8,
      },
  });
  
  const baseText: TextStyle = {
    fontSize: 15,
    fontFamily: "Lilex-Regular",
    color: theme === "dark" ? "#DDD" : "#111",
    lineHeight: 20,
  };

  const baseCheckbox: ViewStyle = {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: accent,
    backgroundColor: theme === "dark" ? "#111" : "#DDD",
    ... shadow,
  };

  const styles = StyleSheet.create({
    bg: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#000" : "#FFF",
      width: "100%",
      height: "100%",
    },

    padding: {
      margin: 10,
      marginTop: 100,
      gap: 9,
    },

    heading: {
      fontSize: 22,
      color: theme === "dark" ? "#FFF" : "#000",
      textShadowColor: accent,
      textShadowOffset: {
        width: 1,
        height: 1,
      },
      textShadowRadius: 3,
      fontFamily: "Lilex-Bold",
    },

    p: {
      ... baseText,
    },

    textInput: {
      backgroundColor: theme === "dark" ? "#222" : "#EEE",
      color: accent,
      borderColor: accent,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
    },

    rowFlex: {
      flexDirection: "row",
      gap: 10,
      overflow: "scroll",
    },

    highlight: {
      color: accent,
      fontFamily: "Lilex-Bold",
    },

    nav: {
      height: 100,
      paddingHorizontal: 20,
      backgroundColor: theme === "dark" ? "#111" : "#DDD",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: accent,
      ... shadow,
    },

    navButton: {
      ... baseText,
      color: accent,
      fontSize: 20,
    },

    container: {
      borderWidth: 2,
      borderColor: accent,
      borderRadius: 8,
      padding: 15,
      backgroundColor: theme === "dark" ? "#111" : "#FFF",
      ... shadow,
    },

    bottomBar: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
      borderTopWidth: 1,
      borderTopColor: accent,
      padding: 10,
      backgroundColor: theme === "dark" ? "#000C" : "#FFFC",
      ... shadow,
    },

    sub: {
      ... baseText,
      fontSize: 11,
      color: "#AAA",
    },

    flexContainer: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: accent,
      borderRadius: 8,
      padding: 10,
      margin: 5,
      backgroundColor: theme === "dark" ? "#111" : "#EEE",
      ...shadow,
    },

    colFlex: {
      flexDirection: "column",
      gap: 10,
      overflow: "scroll",
    },

    checkBoxUnchecked: {
      ... baseCheckbox,
    },

    checkBoxChecked: {
      ... baseCheckbox,
      backgroundColor: accent,
      borderColor: accent,
    },

    circularProgress: {
      borderWidth: 3,
      borderColor: accent,
      borderRadius: 100,
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "dark" ? "#111" : "#EEE",
      ... shadow,
    },

    selectionUnselected: {
      ... baseText,
      color: theme === "dark" ? "white" : "black",
    },

    selectionSelected: {
      ... baseText,
      color: accent,
    },
  });

  return styles;
};

export default useDynamicTheme;