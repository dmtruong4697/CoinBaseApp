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

const SecureScreen: React.FC<IProps>  = () => {

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

        <Image style={styles.imgFingerPrint} source={require('../../../assets/illustrations/secure/fingerPrint.png')}/>
        <Text style={styles.txtTitle}>Secure your account</Text>
        <Text style={styles.txtDescription}>One way we keep your account secure is with 2-step verification, which requires your phone number. We will never call you or use your number without your permission</Text>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Continue'
                type='default'
                onPress={() => {
                    // navigation.navigate('IntroSecure');
                }}
            />
        </View>

    </SafeAreaView>
  )
}

export default SecureScreen    