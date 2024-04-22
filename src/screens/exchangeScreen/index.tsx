import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {}

const ExchangeScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return (
    <SafeAreaView style={styles.viewContainer}>
        <Text>home</Text>
    </SafeAreaView>
  )
}

export default ExchangeScreen    