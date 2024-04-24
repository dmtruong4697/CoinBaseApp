import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
import InputField from '../../components/inputField';
import { Controller, useForm } from 'react-hook-form';
import StepIndicator from '../../components/stepIndicator';
import { colors } from '../../constants/colors';
interface IProps {}

const VerifyIDScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return (
    <SafeAreaView style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>

            <StepIndicator
                totalStep={3}
                currentStep={3}
            />
        </View>

        <Image style={styles.imgIDCard} source={require('../../../assets/illustrations/verifyIDScreen/idCard.png')}/>
        <Text style={styles.txtTitle}>Verify your identity</Text>
        <Text style={styles.txtDescription}>To help protect you from fraud and identity theft, and to comply with federal regulations, we need some info including:</Text>

        <View style={styles.viewButtonGroup}>
            <View style={styles.viewWarning}>
                <Image style={styles.imgLock} source={require('../../../assets/icons/citizenshipScreen/lock.png')}/>
                <Text style={styles.txtWarning}>This info is used only for identity verification and is transmitted securely ysing 128-bit encryption</Text>
            </View>

            <Button
                title='Continue'
                type='default'
                onPress={() => {
                    navigation.navigate('VerifyPhotoID');
                }}
            />
        </View>

    </SafeAreaView>
  )
}

export default VerifyIDScreen    