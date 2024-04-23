/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigator/mainNavigator';


function App(): React.JSX.Element {

  return (
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
  );
}

export default App;
