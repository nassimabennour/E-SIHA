import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { RoundedImage } from "src/components/atoms/RoundedImage";
import { Typography } from "src/components/atoms/Typography";

export const RoundedImageLabel: FC = () => {
  return (
    <View style={styles.container}>
      <RoundedImage />
      <Typography text="Medecin" textType="N1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    padding: 10,
    width: 70,
    height: 70
  },
});
