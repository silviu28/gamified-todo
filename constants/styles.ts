import { TextStyle, ViewStyle } from "react-native";

export const bgStyle: ViewStyle = {
  display: 'flex',
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
};

export const padding: ViewStyle = {
  margin: 50,
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