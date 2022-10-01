import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  text: string;
  disabled?: boolean;
  onPress: () => void;
  stretched?: boolean;
  outlined?: boolean;
  type?: "primary" | "secondary" | "danger" | "warning";
};

const buttonTypeColor = {
  primary: "#2d6be6",
  secondary: "gray",
  danger: "red",
  warning: "orange",
};

export const Button: FC<Props> = ({
  text,
  disabled = false,
  onPress,
  stretched = false,
  outlined = false,
  type = "primary",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        { width: stretched ? "80%" : 80 },
        outlined
          ? { ...styles.outlinedButton, borderColor: buttonTypeColor[type] }
          : {},
        { backgroundColor: outlined ? "white" : buttonTypeColor[type] },
      ]}
    >
      <Text
        style={[
          styles.textStyle,
          outlined ? { color: buttonTypeColor[type] } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    padding: 3,
    height: 40,
    marginVertical: 20,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    paddingHorizontal: 10
  },
  outlinedButton: {
    borderWidth: 1,
  },
});
