import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
import InputField from '../../components/inputField';
import { Controller, useForm } from 'react-hook-form';
interface IProps {}

const ValidateCodeScreen: React.FC<IProps>  = () => {

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
  
  return (
    <View style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.viewFormContainer}>
            <Text style={styles.txtTitle}>Enter the 7-digit code we texted to +xx xxxx xx88</Text>
            <Text style={styles.txtDescription}>This extra step shows it’s really you trying to sign in</Text>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                <InputField
                    inputMode='numeric'
                    value={value}
                    onChangeText={value => onChange(value)}
                    onBlur={onBlur}
                />
                )}
                name='code'
                rules={{
                    required: true,
                }}
            />
            {errors.code && <Text>Email is required.</Text>}
        </View>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Submit'
                type='default'
                onPress={() => {
                    // navigation.navigate('SignIn');
                }}
            />
            
            <Button
                title='I need help'
                type='solid'
                onPress={() => {

                }}
            />
        </View>
    </View>
  )
}

export default ValidateCodeScreen    