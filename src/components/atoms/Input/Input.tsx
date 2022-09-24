import React, { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  placeHolder: string;
  borderBottom?: boolean;
  password?: boolean;
};

export const Input: FC<Props> = ({
  placeHolder,
  borderBottom = 0,
  password = false,
}) => {
  return (
    <>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor="gray"
        secureTextEntry={password}
        style={[styles.container, { borderBottomWidth: borderBottom ? 1 : 0 }]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 15,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
});
