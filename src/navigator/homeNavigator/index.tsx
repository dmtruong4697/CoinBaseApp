import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from './styles';
import { useIsFocused } from '@react-navigation/native';
import HomeScreen from '../../screens/homeScreen';
import PortfolioScreen from '../../screens/portfolioScreen';
import ExchangeScreen from '../../screens/exchangeScreen';
import PriceScreen from '../../screens/priceScreen';
import SettingScreen from '../../screens/settingScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {

    const screenOptions = {
        tabBarStyle:{
            height: 58,
            paddingBottom: 10,
            paddingTop: 10,
        },

        tabBarItemStyle:{
            // backgroundColor: 'pink'
        },

        tabBarHideOnKeyboard: true,
      };

    return (
        <Tab.Navigator
        {...{ screenOptions }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarActiveTintColor: colors.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/home-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/home-inactive.png')}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Portfolio" 
                component={PortfolioScreen} 
                options={{
                    tabBarLabel: "Portfolio",
                    headerShown: false,
                    tabBarActiveTintColor: colors.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/wallet-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/wallet-inactive.png')}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Exchange" 
                component={ExchangeScreen} 
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: () => (
                        <Image style={styles.imgAddIcon} source={require('../../../assets/icon/homeScreen/add-transaction.png')}/>
                    ),
                    
                }}
            />

            <Tab.Screen 
                name="Price" 
                component={PriceScreen} 
                options={{
                    tabBarLabel: "Prices",
                    headerShown: false,
                    tabBarActiveTintColor: colors.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/money-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/money-inactive.png')}/>
                    ),
                }}
            />

            <Tab.Screen 
                name="Setting" 
                component={SettingScreen} 
                options={{
                    tabBarLabel: "Settings",
                    headerShown: false,
                    tabBarActiveTintColor: colors.PrimaryColor,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarIcon: ({focused}) => (
                        (focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/menu-active.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icon/homeScreen/menu-inactive.png')}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
  }
  
  export default HomeNavigator