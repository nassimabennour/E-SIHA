/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { Button } from './components/atoms/Button';


const App = () => {
  return (
    <SafeAreaView>
      <Button 
        disabled={true}
        stretched = {true} 
        outlined = {false}
        type = "danger"
        onPress={()=>{
          console.log("pressed")
        }}
        text={"Go"}
      />
    </SafeAreaView>
  );
};

export default App;
