import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';

interface IProps {
    id: string,
    name: string,
    symbol: string,
    iconUrl: string,
    price: number,
    percentChange: number,

}

const TopMoverItem: React.FC<IProps> = ({id, name, iconUrl, price, symbol, percentChange}) => {

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
    >
        <Image style={styles.imgIcon} source={{uri: data.logo}}/>
        <View style={styles.viewSymbol}>
            <Text style={styles.txtSymbol}>{symbol}</Text>
            <Text style={styles.txtPrice}>{formatter.format(price)}</Text>
        </View>

        <Text style={[styles.txtVolumeChange,{color: (percentChange>0)? '#3F845F':'#E25C5C'}]}>
            <Text>{(percentChange>0)? '+':'-'}</Text>
            {percentChange}%
        </Text>

    </TouchableOpacity>
  )
}

export default TopMoverItem