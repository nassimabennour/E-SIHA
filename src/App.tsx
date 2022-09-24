/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "./components/atoms/Button";
import { Input } from "./components/atoms/Input";
import { Typography } from "./components/atoms/Typography";
import { CardWrapper } from "./components/wrappers/CardWrapper";

const App = () => {
  return (
    <SafeAreaView>
      <CardWrapper>
        <Typography text="Sign in" textType="H3" />
        <Input placeHolder="username" borderBottom={true} password={false} />
        <Input placeHolder="password" borderBottom={true} password={true} />
        <Button
          disabled={true}
          stretched={false}
          outlined={false}
          type="primary"
          onPress={() => {
            console.log("pressed");
          }}
          text="Go"
        />
      </CardWrapper>
    </SafeAreaView>
  );
};

export default App;
