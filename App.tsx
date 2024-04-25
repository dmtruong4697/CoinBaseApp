/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigator/mainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App(): React.JSX.Element {

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </GestureHandlerRootView>
  );
}

export default App;
