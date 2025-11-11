import { TextStyle, ViewStyle } from "react-native";

export const bgStyle: ViewStyle = {
  display: 'flex',
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
};

export const padding: ViewStyle = {
  margin: 30,
  top: 100,
  gap: 9,
};

export const heading: TextStyle = {
  fontSize: 18,
  color: 'white',
};

export const p: TextStyle = {
  fontSize: 14,
  color: 'white'
};

export const textInput = {
  color: 'white',
  backgroundColor: 'gray'
};

export const rowFlex: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
  overflow: 'scroll'
};

export const highlight: TextStyle = {
  color: 'lime'
};

export const nav: ViewStyle = {
  height: 100,
  padding: 20,
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};

export const navButton: TextStyle = {
  color: 'lime',
  fontSize: 20
};

export const container: ViewStyle = {
  borderWidth: 2,
  borderColor: 'lime',
  borderRadius: 5,
  padding: 10,
};

export const bottomBar: ViewStyle = {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 20,
  flexGrow: 1,
  borderTopWidth: 2,
  borderTopColor: 'lime',
  padding: 5
};

export const sub: TextStyle = {
  ... p,
  fontSize: 10
};

export const flexContainer: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',
  borderWidth: 2,
  borderColor: 'lime',
  borderRadius: 5,
  padding: 10,
};

export const colFlex: ViewStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  overflow: 'scroll'
};

export const checkBoxUnchecked: ViewStyle = {
  width: 14,
  height: 14,
  borderWidth: 2,
  borderRadius: 2,
  borderColor: 'lime'
};

export const checkBoxChecked: ViewStyle = {
  ... checkBoxUnchecked,
  backgroundColor: 'lime'
};

export const circularProgress: ViewStyle = {
  borderWidth: 2,
  borderColor: "green",
  borderRadius: "50%",
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
  overflow: "scroll"
};