import { TextStyle, ViewStyle, Platform } from "react-native";

const shadow: ViewStyle = Platform.select({
  ios: {
    shadowColor: '#00FF00', // lime glow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  android: {
    elevation: 8,
  },
}) as ViewStyle;

export const bgStyle: ViewStyle = {
  flex: 1,
  backgroundColor: '#000',
  width: '100%',
  height: '100%',
};

export const padding: ViewStyle = {
  margin: 10,
  marginTop: 100,
  gap: 9,
};

export const heading: TextStyle = {
  fontSize: 22,
  color: '#FFF',
  fontWeight: '700',
  textShadowColor: 'rgba(0, 255, 0, 0.5)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 3,
};

export const p: TextStyle = {
  fontSize: 15,
  color: '#DDD',
  lineHeight: 20,
};

export const textInput: ViewStyle = {
  backgroundColor: '#222',
  borderColor: '#0F0',
  borderWidth: 1,
  borderRadius: 5,
  padding: 10,
  ...shadow,
};

export const rowFlex: ViewStyle = {
  flexDirection: 'row',
  gap: 10,
  overflow: 'scroll',
};

export const highlight: TextStyle = {
  color: 'lime',
  fontWeight: '600',
};

export const nav: ViewStyle = {
  height: 100,
  paddingHorizontal: 20,
  backgroundColor: '#111',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomColor: 'lime',
  ...shadow,
};

export const navButton: TextStyle = {
  color: 'lime',
  fontSize: 20,
  fontWeight: '600',
};

export const container: ViewStyle = {
  borderWidth: 2,
  borderColor: 'lime',
  borderRadius: 8,
  padding: 15,
  backgroundColor: '#111',
  ...shadow,
};

export const bottomBar: ViewStyle = {
  position: 'absolute',
  bottom: 30,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 20,
  borderTopWidth: 1,
  borderTopColor: 'lime',
  padding: 10,
  backgroundColor: '#000C',
  ...shadow,
};

export const sub: TextStyle = {
  ...p,
  fontSize: 11,
  color: '#AAA',
};

export const flexContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: 'lime',
  borderRadius: 8,
  padding: 10,
  backgroundColor: '#111',
  ...shadow,
};

export const colFlex: ViewStyle = {
  flexDirection: 'column',
  gap: 10,
  overflow: 'scroll',
};

export const checkBoxUnchecked: ViewStyle = {
  width: 18,
  height: 18,
  borderWidth: 2,
  borderRadius: 3,
  borderColor: 'lime',
  backgroundColor: '#111',
  ...shadow,
};

export const checkBoxChecked: ViewStyle = {
  ...checkBoxUnchecked,
  backgroundColor: 'lime',
  borderColor: '#0F0',
};

export const circularProgress: ViewStyle = {
  borderWidth: 3,
  borderColor: 'green',
  borderRadius: 100,
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#111',
  ...shadow,
};
