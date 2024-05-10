import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
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
import { signUp } from '../../firebase/services/authService';
interface IProps {}

const SignUpScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const {
        register,
        handleSubmit,
        control,
        getValues,
        formState: { errors },
      } = useForm();
    
      const [isLoading, setIsLoading] = useState(false);
      const onSubmit = async(data: any)=> {
        setIsLoading(true);
        await signUp(navigation, getValues().email, getValues().password);
        setIsLoading(false);
        console.log(getValues());
      };
    
    const [isCheck, setIsCheck] = useState(false);
  
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

        <View style={styles.viewFormContainer}>
            <Text style={styles.txtTitle}>Create your account</Text>

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                <InputField
                    title='First Name'
                    inputMode='text'
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                    // isPassword
                />
                )}
                name='firstName'
                rules={{
                    required: true,
                }}
            />
            {errors.firstName && <Text>First Name is required.</Text>}

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                <InputField
                    title='Last Name'
                    inputMode='text'
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                    // isPassword
                />
                )}
                name='lastName'
                rules={{
                    required: true,
                }}
            />
            {errors.lastName && <Text>Last Name is required.</Text>}

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                <InputField
                    title='Email'
                    inputMode='email'
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                    // isPassword
                />
                )}
                name='email'
                rules={{
                    required: true,
                }}
            />
            {errors.email && <Text>Email is required.</Text>}

            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                <InputField
                    title='Password'
                    inputMode='text'
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                    isPassword
                />
                )}
                name='password'
                rules={{
                    required: true,
                }}
            />
            {errors.password && <Text>Password is required.</Text>}
        </View>

        <View style={styles.viewTerm}>
            <TouchableOpacity
                style={[styles.viewCheck, {
                    backgroundColor: (isCheck)? colors.PrimaryColor: '#FFFFFF',
                    borderColor: (isCheck)? colors.PrimaryColor: '#CFCFCF',
                }]}
                onPress={() => {
                    setIsCheck(!isCheck);
                }}
            >
                <Image style={styles.imgCheck} source={require('../../../assets/icons/signUp/check.png')}/>
            </TouchableOpacity>

            <Text style={styles.txtTerm}>I certify that I am 18 years of age or older, and I agree to the <Text style={[styles.txtTerm, {color: colors.PrimaryColor}]}>User Agreement</Text> and <Text style={[styles.txtTerm, {color: colors.PrimaryColor}]}>Privacy Policy</Text></Text>
        </View>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Start'
                type='default'
                onPress={handleSubmit(onSubmit)}
                // onPress={() => {
                //     navigation.navigate('VerifyEmail');
                // }}
            />
        </View>

        {(isLoading) && 
            <ActivityIndicator size={'large'}/>
        }
    </SafeAreaView>
  )
}

export default SignUpScreen    