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

const IntroSecureScreen: React.FC<IProps>  = () => {

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

        <Image style={styles.imgSecure} source={require('../../../assets/illustrations/introSecure/secure.png')}/>
        <Text style={styles.txtTitle}>Lest's secure your account</Text>
        <View style={styles.viewStepGroup}>
            {/* step 1 */}
            <View style={styles.viewStep}>
                <View style={styles.viewStepIndex}>
                    <Text style={styles.txtStepIndex}>1</Text>
                </View>

                <View style={styles.viewText}>
                    <Text style={styles.txtStepTitle}>Create your account</Text>
                </View>

                <Text style={styles.txtStepTitle}>Completed</Text>
            </View>

            {/* step 2 */}
            <View style={styles.viewStep}>
                <View style={styles.viewStepIndex}>
                    <Text style={styles.txtStepIndex}>2</Text>
                </View>

                <View style={styles.viewText}>
                    <Text style={styles.txtStepTitle}>Secure your account</Text>
                    <Text style={styles.txtStepDescription}>2-step verification</Text>

                </View>

                <Text style={styles.txtStepTitle}>1 min</Text>
            </View>

            {/* step 3 */}
            <View style={styles.viewStep}>
                <View style={[styles.viewStepIndex, {backgroundColor: '#F3F3F3'}]}>
                    <Text style={[styles.txtStepIndex, {color: '#707070'}]}>3</Text>
                </View>

                <View style={styles.viewText}>
                    <Text style={styles.txtStepTitle}>Verify your identity</Text>
                    <Text style={styles.txtStepDescription}>Requied by financial regulations</Text>
                </View>

                <Text style={styles.txtStepTitle}>5 min</Text>
            </View>
        </View>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Start'
                type='default'
                onPress={() => {
                    navigation.navigate('Secure');
                }}
            />
        </View>

    </SafeAreaView>
  )
}

export default IntroSecureScreen    