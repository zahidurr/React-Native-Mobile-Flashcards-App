import { DefaultTheme, Colors } from "react-native-paper";

export const themestyle = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.green900,
    secondary: Colors.green500,
    error: Colors.red500,
  },
};
