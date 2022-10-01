import React, { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const CardWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderWidth: 0.5,
    borderColor: "#2d6be6",
    borderRadius: 10
  },
});
