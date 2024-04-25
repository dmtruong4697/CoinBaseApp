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
    price: number,
    percentChange: number,

}

const WatchlistItem: React.FC<IProps> = ({id, name, iconUrl, price, symbol, percentChange}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const [data, setData] = useState<any>({});
    const [quoteData, setQuoteData] = useState<any>({});
    const fetchData = async() => {
        let Data = await getCoinInfo(Number(id));
        const ID = id.toString();
        setData(Data[id]);
    }

    const fetchQuoteData = async() => {
        let QuoteData = await getQuoteLatest(Number(id));
        const ID = id.toString();
        setQuoteData(QuoteData[id]);
        console.log(quoteData.USD.price);
    }

    useEffect(() => {
        fetchData();
        // fetchQuoteData();
    })
      
  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => {
            navigation.navigate('CryptoDetail', {id: id});
        }}
    >
        <Image style={styles.imgIcon} source={{uri: data.logo}}/>
        <View style={styles.viewText}>
            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtSymbol}>{symbol}</Text>
        </View>
        <View style={styles.viewPrice}>
            <Text style={styles.txtPrice}>{formatter.format(quoteData?.USD?.price)}</Text>
            <Text style={[styles.txtVolumeChange,{color: (percentChange>0)? '#3F845F':'#E25C5C'}]}>
                <Text>{(percentChange>0)? '+':'-'}</Text>
                {percentChange}%
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default WatchlistItem