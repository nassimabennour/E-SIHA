import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { RoundedImage } from "src/components/atoms/RoundedImage";
import { Typography } from "src/components/atoms/Typography";

type Props = {
  profile: string
}

export const RoundedImageLabel: FC<Props> = ({profile}) => {
  return (
    <View style={styles.container}>
      <RoundedImage />
      <Typography text={profile} textType="N1" />
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
