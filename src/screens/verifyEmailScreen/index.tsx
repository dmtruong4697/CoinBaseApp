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

const VerifyEmailScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return (
    <SafeAreaView style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/cancel.png')}/>
            </TouchableOpacity>

            <StepIndicator
                totalStep={3}
                currentStep={1}
            />
        </View>

        <Image style={styles.imgMail} source={require('../../../assets/illustrations/verifyEmail/mail.png')}/>
        <Text style={styles.txtTitle}>Verify your email</Text>
        <Text style={styles.txtDescription}>We sent a verification email to. Please tap the link inside that email to continiue</Text>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Check my inbox'
                type='default'
                onPress={() => {
                    navigation.navigate('IntroSecure');
                }}
            />
            
            <Button
                title='Resend email'
                type='solid'
                onPress={() => {

                }}
            />
        </View>

    </SafeAreaView>
  )
}

export default VerifyEmailScreen    