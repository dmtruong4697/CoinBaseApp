
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
import RBSheet from 'react-native-raw-bottom-sheet';

interface IProps {}

const AuthenCodeScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const {
        register,
        handleSubmit,
        control,
        getValues,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data: any)=> {
        console.log(getValues());
    };

    const [code, setCode] = useState('');
  
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
                currentStep={2}
            />
        </View>

        <View style={styles.viewFormContainer}>
            <Text style={styles.txtTitle}>Enter authentication code</Text>
            <Text style={styles.txtDescription}>Enter the 7-digit code we just texted to your phone number,</Text>

            <View style={styles.viewInput}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                    <InputField
                        title='Code'
                        inputMode='numeric'
                        value={value}
                        onChangeText={value => onChange(value)}
                        onBlur={onBlur}
                        placeHolder='Code'
                    />
                    )}
                    name='code'
                    rules={{
                        required: true,
                    }}
                />
            </View>
            {errors.code && <Text>Code is required.</Text>}
        </View>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Continue'
                type='default'
                onPress={() => {
                    navigation.navigate('Citizenship');
                }}
            />
            <Button
                title='Resend code'
                type='solid'
                onPress={() => {
                    
                }}
            />
        </View>

    </SafeAreaView>
  )
}

export default AuthenCodeScreen    