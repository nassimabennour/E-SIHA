import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "src/components/atoms/RadioButton";
import { Typography } from "src/components/atoms/Typography";
import { typography } from "src/constants/typography";

type Props = {
  isChecked?: boolean;
  disabled?: boolean;
  text: string;
};

export const RadioButtonLabel: FC<Props> = ({ text, disabled, isChecked }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
      <Typography text={text} textType="blackText" />
      </View>
      <View style={styles.item2}>
      <RadioButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    padding: 5
  },
  item1: {
    marginHorizontal: 5
  },
  item2: {},
});
