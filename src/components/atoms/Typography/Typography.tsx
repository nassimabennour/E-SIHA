import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { typography } from "../../../constants/typography";

type Props = {
  text: string;
  textType: keyof typeof typography;
};

export const Typography: FC<Props> = ({ text, textType }) => {
  return <Text style={[typography[textType]]}>{text}</Text>;
};

const styles = StyleSheet.create({});
