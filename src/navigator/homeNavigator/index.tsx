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
                        (!focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/home.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/home-active.png')}/>
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
                        (!focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/pie-chart.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/pie-chart-active.png')}/>
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
                        <View style={styles.viewIconAdd}>
                        <Image style={styles.imgAddIcon} source={require('../../../assets/icons/bottomTab/swap.png')}/>
                        </View>
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
                        (!focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/chart.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/chart-active.png')}/>
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
                        (!focused)?
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/user.png')}/>
                        :
                        <Image style={styles.imgTabBarIcon} source={require('../../../assets/icons/bottomTab/user-active.png')}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
  }
  
  export default HomeNavigator