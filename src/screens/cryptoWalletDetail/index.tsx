import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
import { OrderType } from '../../firebase/services/cryptoService';
import { getOrderByCrypto } from '../../firebase/services/orderService';
import { useSelector } from 'react-redux';
import OrderHistoryItem from '../../components/orderHistoryItem';

interface IProps {}

const CryptoWalletDetailScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CryptoWalletDetail'>>();
    const {portfolio} = route.params;
    const currentUser = useSelector((state: any) => state.auth.currentUser);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const [orders, setOrders] = useState<OrderType[]>([]);
    const fetchData = async() => {
        const order = await getOrderByCrypto(currentUser.uid, portfolio.crypto);
        setOrders(order);
    }

    useEffect(() => {
        fetchData();
    },[]);

  
  return (
    <ScrollView contentContainerStyle={styles.viewContainer} scrollEnabled={true}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.viewTopInfo}>
            <View style={styles.viewTotalInfo}>
                <Text style={styles.txtQuantity}>{portfolio.quantity} {portfolio.crypto.symbol}</Text>
                <Text style={styles.txtTotal}>{formatter.format(portfolio.quantity*portfolio.price)}</Text>
            </View>

            <TouchableOpacity
                style={styles.btnQR}
                onPress={() => {
                    navigation.navigate('QR', {portfolioId: portfolio.id})
                }}
            >
                <Image style={styles.imgQR} source={require('../../../assets/icons/walletDetail/qr-code.png')}/>
            </TouchableOpacity>
        </View>

        {(orders.length == 0) && 
            <View style={styles.viewNoti}>
                <Text style={styles.txtNotiTitle}>You have no transactions</Text>
                <Text style={styles.txtNotiDescription}>Buy {portfolio.crypto.name} now and your transactions will be shown here.</Text>

                <Button
                    title={`Buy ${portfolio.crypto.symbol}`}
                    onPress={() => {
                        // console.log(orders);
                        navigation.navigate('BuyCrypto', {crypto: portfolio.crypto});
                    }}
                />
            </View>
        }

        {(orders.length > 0) &&
            <View style={{width: '100%'}}>
                <Button
                    title='Trade'
                    onPress={() => {
                        navigation.navigate('BuyCrypto', {id: portfolio.crypto.id, crypto: portfolio.crypto});
                    }}
                />

                <View style={styles.viewGroup}>
                    <Text style={styles.txtGroupTitle}>Recurring orders</Text>
                    <Text style={styles.txtDescription}>Unsure when to but? Try dollar cost averaging with a recurring buy</Text>
                    <Button
                        title='Set up recurring buy'
                        onPress={() => {

                        }}
                        type='solid'
                    />
                </View>

                <View style={styles.viewGroup}>
                    <Text style={styles.txtGroupTitle}>History</Text>
                    <FlatList
                        data={orders}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                        renderItem={({item}) => (
                            <OrderHistoryItem
                                order={item}
                            />
                        )}
                        contentContainerStyle={{gap: 5,}}
                    />
                </View>
            </View>
        }

    </ScrollView>
  )
}

export default CryptoWalletDetailScreen    