import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  text: string;
  disabled?: boolean;
  onPress: () => void;
  stretched?: boolean;
  outlined?: boolean;
  type?: "primary" | "secondary" | "danger" | "warning"
};

const buttonTypeColor = {
    primary : "blue",
    secondary: "gray",
    danger: "red",
    warning: "orange"
}

export const Button: FC<Props> = ({
  text,
  disabled = false,
  onPress,
  stretched = false,
  outlined = false,
  type = "primary"
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.container,
          { width: stretched ? "100%" : 80 },
          outlined ? {...styles.outlinedButton, borderColor: buttonTypeColor[type]} : {},
          {backgroundColor : outlined ? "white" : buttonTypeColor[type]}
        ]}
      >
        <Text
          style={[styles.textStyle, outlined ? { color: buttonTypeColor[type]} : {}]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 15,
    borderRadius: 10
  },
  textStyle: {
    textAlign: "center",
    fontSize: 10,
    color: "white"
  },
  outlinedButton: {
    borderWidth: 1
  }
});
