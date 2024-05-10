/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import MainNavigator from './src/navigator/mainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux/stores';
import notifee, { AndroidColor, IntervalTrigger, TimeUnit, TimestampTrigger, TriggerType } from '@notifee/react-native';

function App(): React.JSX.Element {

  async function onDisplayNotification() {
    await notifee.requestPermission()

    const date = new Date(Date.now() + (1 * 60 * 1000))

    // Create a time-based trigger
    const trigger: IntervalTrigger = {
      type: TriggerType.INTERVAL,
      timeUnit: TimeUnit.MINUTES,
      interval: 15,
    };

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.createTriggerNotification({
      title: 'Test Local Notification!',
      body: 'Main body content of the notification',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    },
    trigger,
  );
  }

  useEffect(() => {
    onDisplayNotification();
  },[]);

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
