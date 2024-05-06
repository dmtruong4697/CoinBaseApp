import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, ActivityIndicator } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
import InputField from '../../components/inputField';
import { Controller, useForm } from 'react-hook-form';
import { signIn } from '../../firebase/services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/actions/auth.action';
interface IProps {}

const SignInScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: any) => state.auth.currentUser);

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
        await signIn(navigation, getValues().email, getValues().password)
            .then((user) => {
                dispatch(loginSuccess(user));
            });
        setIsLoading(false);
        console.log(getValues());
      };
  
  return (
    <View style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/cancel.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.viewFormContainer}>
            <Text style={styles.txtTitle}>Sign in to Coinbase</Text>
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

            <View style={styles.viewOptionGroup}>
                <TouchableOpacity
                    onPress={() => {
                        console.log(currentUser)
                    }}
                >
                    <Text style={styles.txtOption}>Forgot password</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.txtOption}>Privacy policy</Text>
                </TouchableOpacity>
            </View>

            <Button
                title='Sign In'
                type='default'
                // onPress={handleSubmit(onSubmit)}
                onPress={
                    handleSubmit(onSubmit)}
            />
        </View>

        {(isLoading) && 
            <ActivityIndicator size={'large'}/>
        }
    </View>
  )
}

export default SignInScreen    