import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  imageSrc?: string;
};

export const RoundedImage: FC<Props> = ({ imageSrc }) => {
  return (
    <TouchableOpacity>
      <Image 
      source={{
        uri: 'https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/lien.png',
      }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: "#2d6be6",
    borderWidth: 1,
    alignSelf: "center"
  },
});
