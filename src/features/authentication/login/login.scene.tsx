import React, { FC } from "react";
import { Button } from "src/components/atoms/Button";
import { Input } from "src/components/atoms/Input";
import { Typography } from "src/components/atoms/Typography";
import { CardWrapper } from "src/components/wrappers/CardWrapper";

type Props = {
  title: string;
  placeholders: {
    username: string;
    password: string;
  };
  buttonText: string;
};

export const LoginScene: FC<Props> = ({ title, placeholders, buttonText }) => {
  return (
    <CardWrapper>
      <Typography text={title} textType="H3" />
      <Input
        placeHolder={placeholders.username}
        borderBottom={true}
        password={false}
      />
      <Input
        placeHolder={placeholders.password}
        borderBottom={true}
        password={true}
      />
      <Button
        disabled={true}
        stretched={false}
        outlined={false}
        type="primary"
        onPress={() => {
          console.log("pressed");
        }}
        text={buttonText}
      />
    </CardWrapper>
  );
};
