import React, { FC } from "react";
import { LoginScene } from "./login.scene";
import { content, contentFr } from "./fixture";

export const LoginView: FC = () => {
  return (
    <LoginScene
      title={contentFr.title}
      placeholders={contentFr.placeholders}
      buttonText={contentFr.buttonText}
    />
  );
};
