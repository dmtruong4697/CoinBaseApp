import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
interface IProps {}

const WelcomeScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return (
    <View style={styles.viewContainer}>
        <Text style={styles.txtAppName}>coinbase</Text>
        <View style={styles.viewButtonGroup}>
            <Button
                title='Get started'
                type='solid'
                onPress={() => {

                }}
            />

            <Button
                title='Sign in'
                type='default'
                onPress={() => {
                    navigation.navigate('SignIn');
                }}
            />
        </View>
    </View>
  )
}

export default WelcomeScreen    