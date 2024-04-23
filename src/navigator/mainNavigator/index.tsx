import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, useState } from 'react'
import WelcomeScreen from "../../screens/welcomeScreen";
import SignInScreen from "../../screens/signInScreen";
import ValidateCodeScreen from "../../screens/validateCodeScreen";
import SignUpScreen from "../../screens/signUpScreen";
import VerifyEmailScreen from "../../screens/verifyEmailScreen";
import IntroSecureScreen from "../../screens/introSecureScreen";
import SecureScreen from "../../screens/secureScreen";
import HomeNavigator from "../homeNavigator";
import TwoStepScreen from "../../screens/twoStepScreen";
import AuthenCodeScreen from "../../screens/authenCodeScreen";
import CitizenshipScreen from "../../screens/citizenshipScreen";


export type RootStackParamList = {
    HomeNavigator: {};
    Splash: {};
    Welcome: {};
    SignIn: {};
    ValidateCode: {};
    SignUp: {};
    VerifyEmail: {};
    IntroSecure: {};
    Secure: {};
    TwoStep: {};
    AuthenCode: {};
    Citizenship: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="SignIn" 
            component={SignInScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="ValidateCode" 
            component={ValidateCodeScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="VerifyEmail" 
            component={VerifyEmailScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="IntroSecure" 
            component={IntroSecureScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen 
            name="Secure" 
            component={SecureScreen}
            options={{
                headerShown: false,
            }} 
        />

        <Stack.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="TwoStep"
            component={TwoStepScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="AuthenCode"
            component={AuthenCodeScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Citizenship"
            component={CitizenshipScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
  )
}

export default MainNavigator