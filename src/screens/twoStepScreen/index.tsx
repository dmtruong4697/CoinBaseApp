
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
import { CountryCodeData } from '../../data/countryCode';
import CountryCodeCard from '../../components/countryCodeCard';

interface IProps {}

const TwoStepScreen: React.FC<IProps>  = () => {

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

    const [countryCode, setCountryCode] = useState('1');

    const refRBSheet = useRef();
  
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
            <Text style={styles.txtTitle}>Set up 2-step verification</Text>
            <Text style={styles.txtDescription}>Enter your phone number so we can text you an authentication code.</Text>

            <View style={styles.viewInput}>
                <View style={styles.viewInputContainer}>
                    <Text style={styles.txtInputTitle}>Country</Text>
                    <TouchableOpacity 
                        style={styles.inputContainer}
                        onPress={() => refRBSheet.current.open()}
                    >
                        <Text style={styles.txtCode}>+{countryCode}</Text>
                        <Image style={styles.imgDown} source={require('../../../assets/icons/twoStepScreen/down.png')}/>
                    </TouchableOpacity>
                </View>

                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                    <InputField
                        title='Phone'
                        inputMode='numeric'
                        value={value}
                        onChangeText={value => onChange(value)}
                        onBlur={onBlur}
                        placeHolder='Your phone number'
                        containerStyle={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            width: '80%',
                        }}
                    />
                    )}
                    name='phone'
                    rules={{
                        required: true,
                    }}
                />
            </View>
            {errors.phone && <Text>Phone Number is required.</Text>}
        </View>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Continue'
                type='default'
                onPress={() => {
                    navigation.navigate('AuthenCode');
                }}
            />
        </View>

      {/* List Menu */}
      <RBSheet 
        ref={refRBSheet} 
        draggable={true} 
        // dragOnContent 
        useNativeDriver={false}
        customStyles={{
            container: {
                // backgroundColor: 'pink',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },
            draggableIcon: {
                backgroundColor: '#FFFFFF',
            }
        }}
      >
            <View style={{}}>
                <FlatList
                    data={CountryCodeData}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    renderItem={({item}) => (
                        <CountryCodeCard
                            id={item.id}
                            code={item.code}
                            name={item.name}
                            iconUrl={item.iconUrl}
                            onPress={() => {
                                setCountryCode(item.code);
                                refRBSheet.current.close();
                            }}
                        />
                    )}
                    contentContainerStyle={{gap: 10, paddingBottom: 50,}}
                />
            </View>
      </RBSheet>

    </SafeAreaView>
  )
}

export default TwoStepScreen    