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
        /*source={require('../../../assets/images/6400_6_04.jpg')}*/
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 0.5,
    marginVertical: 0.5,
    borderColor: "blue",
    borderWidth: 1,
    alignSelf: "center"
  },
});
