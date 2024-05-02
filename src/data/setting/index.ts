import { NavigationProp } from "@react-navigation/native";

export const SettingAccountData = [
    {
        id: '1',
        title: 'Limits and features',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
    {
        id: '2',
        title: 'Native currency',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
    {
        id: '3',
        title: 'Country',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
    {
        id: '4',
        title: 'Privacy',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
    {
        id: '5',
        title: 'Phone numbers',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
    {
        id: '6',
        title: 'Notification settings',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
]

export const SettingSecurityData = [
    {
        id: '1',
        title: 'Require PIN / Face ID',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
        renderToggle: true,
        toggleStatus: false,
    },
    {
        id: '2',
        title: 'PIN / Face ID settings',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
    {
        id: '3',
        title: 'Privacy mode',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
        renderToggle: true,
        toggleStatus: true,
        description: 'Long press on your portfolio balance to hide your balances everywhere in the app',
    },
    {
        id: '4',
        title: 'Support',
        onPress: (navigation: NavigationProp<any, any>) => {
            // navigation.navigate('Setting');
        },
    },
]