import React, { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const CardWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderWidth: 0.5,
    borderColor: "blue",
    borderRadius: 10
  },
});
