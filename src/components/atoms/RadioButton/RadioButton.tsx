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
      style={[styles.container, { borderColor: disabled ? "gray" : "blue" }]}
      disabled={disabled}
    >
      <View
        style={[
          isRadioChecked ? styles.btnFill : {},
          { backgroundColor: disabled ? "gray" : "blue" },
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
    borderColor: "blue",
    borderRadius: 50,
  },
  btnFill: {
    backgroundColor: "blue",
    width: 7,
    height: 7,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 0.75,
  },
});
