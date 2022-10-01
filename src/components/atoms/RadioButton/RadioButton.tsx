import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  isChecked?: boolean;
  disabled?: boolean;
  //onPress : () => void;
};

export const RadioButton: FC<Props> = ({
  isChecked = false,
  disabled = false,
}) => {
  const [isRadioChecked, setIsRadioChecked] = useState(isChecked);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("pressed");
        setIsRadioChecked(!isRadioChecked);
      }}
      style={[styles.container, { borderColor: disabled ? "gray" : "#2d6be6" }]}
      disabled={disabled}
    >
      <View
        style={[
          isRadioChecked ? styles.btnFill : {},
          { backgroundColor: disabled ? "gray" : "#2d6be6" },
        ]}
      ></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 10,
    height: 10,
    borderColor: "#2d6be6",
    borderRadius: 50,
  },
  btnFill: {
    backgroundColor: "#2d6be6",
    width: 7,
    height: 7,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 0.75,
  },
});
