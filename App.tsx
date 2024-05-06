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
import { Provider } from 'react-redux';
import store from './src/redux/stores';


function App(): React.JSX.Element {

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
        </Provider>
      </GestureHandlerRootView>
  );
}

export default App;
