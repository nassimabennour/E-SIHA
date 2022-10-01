import React, { FC } from "react";
import { content, contentFr } from "./fixtures";
import { OnboardingScene } from "./onboarding.scene";

export const OnboardingView: FC = () => {
  return (
    <OnboardingScene
      pageTitle={content.pageTitle}
      informationText={content.informationText}
      profiles={content.profiles}
    />
  );
};
