import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';

interface IProps {}

const CryptoWalletDetailScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CryptoWalletDetail'>>();
    const {cryptoId} = route.params;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

  
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
                <Text style={styles.txtQuantity}>0</Text>
                <Text style={styles.txtTotal}>{formatter.format(0)}</Text>
            </View>

            <TouchableOpacity
                style={styles.btnQR}
                onPress={() => {
                    navigation.navigate('QR', {cryptoId: cryptoId})
                }}
            >
                <Image style={styles.imgQR} source={require('../../../assets/icons/walletDetail/qr-code.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.viewNoti}>
            <Text style={styles.txtNotiTitle}>You have no transactions</Text>
            <Text style={styles.txtNotiDescription}>Buy Bitcoin now and your transactions will be shown here.</Text>

            <Button
                title='Buy BTC'
                onPress={() => {

                }}
            />
        </View>

    </ScrollView>
  )
}

export default CryptoWalletDetailScreen    