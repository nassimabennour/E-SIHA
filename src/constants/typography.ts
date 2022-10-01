import { StyleProp, TextStyle } from "react-native";

const sharedHeadingStyle: StyleProp<TextStyle> = {
  fontWeight: "bold",
  color: "blue",
  textAlign: "center",
};

const sharedCentredText: StyleProp<TextStyle> = {
  textAlign: "center",
  fontSize: 7,
};
export const typography: { [key: string]: StyleProp<TextStyle> } = {
  H1: {
    fontSize: 15,
    ...sharedHeadingStyle,
  },
  H2: { fontSize: 13, ...sharedHeadingStyle },
  H3: { fontSize: 11, ...sharedHeadingStyle },
  H4: { fontSize: 9, ...sharedHeadingStyle },
  H5: { fontSize: 7, ...sharedHeadingStyle },
  blackCentredText: { color: "black", ...sharedCentredText },
  blueCentredText: { color: "blue", ...sharedCentredText },
  blackText: { color: "black", fontSize: 7 },
  N1: { fontSize: 10, fontWeight: "bold", color: "blue" },
};
