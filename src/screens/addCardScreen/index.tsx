import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Button from '../../components/button';
import { CreditCardType, addCreditCard } from '../../firebase/services/creditService';
import { useSelector } from 'react-redux';

interface IProps {}

type FormDataType = {
    id: string,
    nameOnCard: string;
    cardNumber: string;
    expiration: string;
    cvc: string;
    postalCode: string;
  }

const AddCardScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    // const route = useRoute<RouteProp<RootStackParamList, 'CryptoDetail'>>();
    // const {id} = route.params;
    const currentUser = useSelector((state: any) => state.auth.currentUser);

    const {
        register,
        handleSubmit,
        control,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data: FormDataType)=> {
        console.log(getValues());
    };

    const [cardNumber, setCardNumber] = useState('');
    const _handlingCardNumber = (number: string) => {
        setCardNumber(number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
    }

    const [expiration, setExpiration] = useState('');
    const _handlingCardExpiry = (text: string) => {
        if (text.indexOf('.') >= 0 || text.length > 5) {
            return;
        }
    
        if (text.length === 2 && expiration.length === 1) {
            text += '/'
        }

        setExpiration(text);
    }
    const handleAddCard = async() => {
        const newCard: CreditCardType = {
            id: Math.random().toString(16).slice(2),
            cardNumber: getValues().cardNumber,
            nameOnCard: getValues().nameOnCard,
            unit: 'USD',
            cvc: getValues().cvc,
            expiration: getValues().expiration,
            limit: 200,
            postalCode: getValues().postalCode,
            total: 100000,
        }

        const message = await addCreditCard(currentUser.uid, newCard, navigation);
        console.log(message);
    }
  
  return (
    <View style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>
        </View>

        <Text style={styles.txtTitle}>Lick your card</Text>

        <View style={styles.viewFormContainer}>
            {/* name on card */}
            <View style={styles.viewFormItem}>
                <Text style={styles.txtFormItemTitle}>Name on card</Text>
                <View style={styles.viewInputContainer}>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput  
                              style={styles.inputField}
                              onBlur={onBlur}
                              onChangeText={value => onChange(value)}
                              value={value}
                              placeholder='Mobbin'
                            />
                        )}
                        name='nameOnCard'
                        rules={{
                            required: true,
                        }}
                    />
                </View>
                {errors.nameOnCard && <Text>Card holder name is required.</Text>}
            </View>

            {/* card number */}
            <View style={styles.viewFormItem}>
                <Text style={styles.txtFormItemTitle}>Card number</Text>
                <View style={styles.viewInputContainer}>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput  
                              style={styles.inputField}
                              onBlur={onBlur}
                              onChangeText={value => {
                                setValue('cardNumber', value);
                                _handlingCardNumber(value);
                              }}
                              value={cardNumber}
                              inputMode='numeric'
                              placeholder='XXXX XXXX XXXX XX'
                              
                            />
                        )}
                        name='cardNumber'
                        rules={{
                            required: true,
                        }}
                    />
                    <Image style={styles.imgVisa} source={require('../../../assets/icons/addCardScreen/visa.png')}/>
                    <Image style={styles.imgVisa} source={require('../../../assets/icons/addCardScreen/mastercard.png')}/>
                </View>
                {errors.cardNumber && <Text>Card number is required.</Text>}
            </View>

            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                {/* expiration */}
                <View style={[styles.viewFormItem, {width: '48%'}]}>
                    <Text style={styles.txtFormItemTitle}>Expiration</Text>
                    <View style={styles.viewInputContainer}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput  
                                    style={styles.inputField}
                                    onBlur={onBlur}
                                    onChangeText={value => {
                                       setValue('expiration', value);
                                       _handlingCardExpiry(value);
                                    }}
                                    value={expiration}
                                    inputMode='numeric'
                                    placeholder='MM/YY'
                                />
                            )}
                            name='expiration'
                            rules={{
                                required: true,
                            }}
                        />
                    </View>
                    {errors.expiration && <Text>Expiration is required.</Text>}
                </View>

                {/* cvc */}
                <View style={[styles.viewFormItem, {width: '48%'}]}>
                    <Text style={styles.txtFormItemTitle}>CVC</Text>
                    <View style={styles.viewInputContainer}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput  
                                    style={styles.inputField}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    inputMode='numeric'
                                    placeholder='123'
                                />
                            )}
                            name='cvc'
                            rules={{
                                required: true,
                            }}
                        />
                    </View>
                    {errors.cvc && <Text>CVC is required.</Text>}
                </View>
            </View>

            {/* postal code */}
            <View style={styles.viewFormItem}>
                <Text style={styles.txtFormItemTitle}>Postal code</Text>
                <View style={styles.viewInputContainer}>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput  
                                style={styles.inputField}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                inputMode='numeric'
                                placeholder='012345'
                            />
                        )}
                        name='postalCode'
                        rules={{
                            required: true,
                        }}
                    />
                </View>
                {errors.postalCode && <Text>Postal code is required.</Text>}
            </View>
        </View>

        <View style={{flex: 1}}/>

        <View style={styles.viewBottom}>
            <Text style={styles.txtBottom}>
                By adding a new card, you agree to the 
                <TouchableOpacity>
                    <Text style={styles.txtLink}>credit/debit card terms</Text>
                </TouchableOpacity>
                .
            </Text>

            <Button
                title='Add Card'
                // onPress={handleSubmit(onSubmit)}
                onPress={() => {
                    handleAddCard();
                }}
            />
        </View>

    </View>
  )
}

export default AddCardScreen    