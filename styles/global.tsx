import { StyleSheet } from "react-native";

const styleVariables = {
  main: "pink",
};

export const globalStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    elevation: 4,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 6,
    backgroundColor: styleVariables.main,
  },
  bigText: {
    fontSize: 24,
  },
  smallText: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  smallIcon: {
    paddingHorizontal: 10,
  },
});
