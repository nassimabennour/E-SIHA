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

const App = () => {
  return (
    <SafeAreaView>
      <>
        <Input placeHolder="test" borderBottom={true} password={true} />
      </>
      <>
        <Button
          disabled={true}
          stretched={false}
          outlined={false}
          type="primary"
          onPress={() => {
            console.log("pressed");
          }}
          text={"Go"}
        />
      </>
    </SafeAreaView>
  );
};

export default App;
