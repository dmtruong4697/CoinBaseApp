import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
    id: string,
    name: string,
    symbol: string,
    iconUrl: string,
    total: number,
    quantity: number,

}

const CryptoWalletItem: React.FC<IProps> = ({id, name, iconUrl, total, symbol, quantity}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // const [data, setData] = useState<any>({});
    // const [quoteData, setQuoteData] = useState<any>({});
    // const fetchData = async() => {
    //     let Data = await getCoinInfo(Number(id));
    //     const ID = id.toString();
    //     setData(Data[id]);
    // }

    // const fetchQuoteData = async() => {
    //     let QuoteData = await getQuoteLatest(Number(id));
    //     const ID = id.toString();
    //     setQuoteData(QuoteData[id]);
    //     console.log(quoteData.USD.price);
    // }

    // useEffect(() => {
    //     fetchData();
    //     // fetchQuoteData();
    // })
      
  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => {
            navigation.navigate('CryptoWalletDetail', {cryptoId: id});
        }}
    >
        <Image style={styles.imgIcon} source={{uri: iconUrl}}/>
        <View style={styles.viewText}>
            <Text style={styles.txtName}>{symbol} Wallet</Text>
            {/* <Text style={styles.txtSymbol}>{symbol}</Text> */}
        </View>
        <View style={styles.viewPrice}>
            <Text style={styles.txtPrice}>{formatter.format(total)}</Text>
            <Text style={styles.txtQuantity}>{quantity} {symbol}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CryptoWalletItem