import React, { FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Typography } from "src/components/atoms/Typography";
import { RoundedImageLabel } from "src/components/molecules/RoundedImageLabel";
import { CardWrapper } from "src/components/wrappers/CardWrapper";

type Props = {
    pageTitle : string,
    informationText: string,
    profiles : {
        medecin: string,
        laboratory: string,
        patient: string,
        pharmacy: string
    }
}

export const OnboardingScene: FC<Props> = ({pageTitle, informationText, profiles}) => {
  return (
    <SafeAreaView>
      <Typography text={pageTitle} textType="H3" />
      <CardWrapper>
        <Typography text={informationText} textType="blackCentredText" />
      </CardWrapper>
      <View style={styles.profileContainer}>
        <View style={styles.row}>
            <RoundedImageLabel profile={profiles.medecin}/>
            <RoundedImageLabel profile={profiles.medecin}/>
        </View>
        <View style={styles.row}>
            <RoundedImageLabel profile={profiles.laboratory}/>
            <RoundedImageLabel profile={profiles.pharmacy}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        margin: 8,
    },
    row: {
        flexDirection: "row",
        padding: 10
    }
});
