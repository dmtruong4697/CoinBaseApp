import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, ToastAndroid } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import { PortfolioData } from '../../data/portfolioData';
import PaymentCard from '../../components/paymentCard';
import NumberKeyboard from '../../components/numberKeyboard';
import RBSheet from 'react-native-raw-bottom-sheet';
import { RepeatPruchaseData } from '../../data/repeatPurchase';
import { CreditCardData } from '../../data/creditCard';

interface IProps {}

export const BuyCryptoContext = createContext<any>(null);

const BuyCryptoScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'BuyCrypto'>>();
    const {id, cryptoId} = route.params;

    const crypto = PortfolioData[Number(id)-1];
    const [value, setValue] = useState('0');

    const paymentRef = useRef();
    const repeatRef = useRef();
    const [repeatTypeId, setRepeatTypeId] = useState('1');
    const [creditCard, setCreditCard] = useState(CreditCardData[0]);
  
  return (
    <BuyCryptoContext.Provider value={{value, setValue}}>
    <View style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>

            <Text style={styles.txtHeaderTitle}>Buy {crypto.name}</Text>
        </View>

        <View style={styles.viewGroup}>
            <View style={styles.viewPrice}>
                <Text style={styles.txtPrice}>SGD {value}</Text>
                <TouchableOpacity
                    style={styles.btnSwap}
                >
                    <Image style={styles.imgSwap} source={require('../../../assets/icons/buyCryptoScreen/swap.png')}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.btnPurchase}
                onPress={() => {
                    repeatRef.current.open();
                }}
            >
                <Text style={styles.txtPurchase}>{RepeatPruchaseData[Number(repeatTypeId) - 1].name}</Text>
            </TouchableOpacity>

            <PaymentCard
                id={creditCard.id}
                code={creditCard.code}
                limit={creditCard.limit}
                name={creditCard.name}
                type='default'
                unit={creditCard.unit}
                onPress={() => {
                    paymentRef.current.open();
                }}
            />
        </View>

        <View style={styles.viewBottom}>
            <NumberKeyboard
                context={BuyCryptoContext}
            />
            <Button
                title='Preview buy'
                onPress={() => {
                    navigation.navigate('BuyPreview', {orderId: ''})
                }}
            />
        </View>

        {/* repeat */}
        <RBSheet 
            ref={repeatRef} 
            draggable={true} 
            // dragOnContent 
            useNativeDriver={false}
            customStyles={{
                container: {
                    // backgroundColor: 'pink',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 450,
                },
                draggableIcon: {
                    backgroundColor: '#FFFFFF',
                },
                wrapper: {
                    // backgroundColor: 'transparent'
                }
            }}
        >
            <View style={styles.viewRepeat}>
                <Text style={styles.txtRepeatTitle}>Repeat this purchase?</Text>
                <FlatList
                    data={RepeatPruchaseData}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={[styles.btnRepeat, {
                                backgroundColor: (repeatTypeId == item.id)? '#F5F8FE':'transparent',
                            }]}
                            onPress={() => {
                                setRepeatTypeId(item.id);
                                repeatRef.current.close();
                            }}
                        >
                            <Text style={styles.txtRepeatButton}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={{gap: 10, }}
                />
            </View>
        </RBSheet>

        {/* payment */}
        <RBSheet 
            ref={paymentRef} 
            draggable={true} 
            // dragOnContent 
            useNativeDriver={false}
            customStyles={{
                container: {
                    // backgroundColor: 'pink',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 450,
                },
                draggableIcon: {
                    backgroundColor: '#FFFFFF',
                },
                wrapper: {
                    // backgroundColor: 'transparent'
                }
            }}
        >
            <View style={styles.viewRepeat}>
                <Text style={styles.txtRepeatTitle}>Payment with</Text>
                <FlatList
                    data={CreditCardData}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    renderItem={({item}) => (
                        <PaymentCard
                            id={item.id}
                            code={item.code}
                            limit={item.limit}
                            name={item.name}
                            type={(creditCard.id == item.id)? 'second':'default'}
                            containerStyle={{
                                borderWidth: 0,
                            }}
                            unit={item.unit}
                            onPress={() => {
                                setCreditCard(item);
                                paymentRef.current.close();
                            }}
                        />
                    )}
                    contentContainerStyle={{gap: 10, }}
                />
                <Button
                    title='Add a payment method'
                    type='solid'
                    onPress={() => {

                    }}
                />
            </View>
        </RBSheet>

    </View>
    </BuyCryptoContext.Provider>
  )
}

export default BuyCryptoScreen    