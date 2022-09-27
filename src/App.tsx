import React from "react";
import { SafeAreaView } from "react-native";
import { LoginView } from "./features/authentication/login";

const App = () => {
  return (
    <SafeAreaView>
      <LoginView />
    </SafeAreaView>
  );
};

export default App;
