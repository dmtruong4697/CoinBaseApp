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

const VerifyPhotoIDScreen: React.FC<IProps>  = () => {

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
                currentStep={3}
            />
        </View>

        <Image style={styles.imgPhotoID} source={require('../../../assets/illustrations/verifyPhotoIDScreen/idPhoto.png')}/>
        <Text style={styles.txtTitle}>Verify your photo ID</Text>
        <Text style={styles.txtDescription}>Financial regulations require us to verify your ID. This helps prevent someone else from creating a Coinbase account in your name</Text>
        <Text style={styles.txtDescription}>After this step, you’ll be ready to start trading crypto!</Text>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Continue'
                type='default'
                onPress={() => {
                    navigation.navigate('SelectIDType');
                }}
            />
        </View>

    </SafeAreaView>
  )
}

export default VerifyPhotoIDScreen    