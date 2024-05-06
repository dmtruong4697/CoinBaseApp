import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CryptoType } from '../../firebase/services/cryptoService';

interface IProps {
    id: string,
    name: string,
    symbol: string,
    iconUrl: string,
    total: number,
    quantity: number,

}

const PortfolioItem: React.FC<IProps> = ({id, name, iconUrl, total, symbol, quantity}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => {
            navigation.navigate('BuyCrypto', {id: id, crypto: {
                id: id,
                logo: iconUrl,
                symbol: symbol,
                name: name,
            }});
        }}
    >
        <Image style={styles.imgIcon} source={{uri: iconUrl}}/>
        <View style={styles.viewText}>
            <Text style={styles.txtName}>{name}</Text>
            {/* <Text style={styles.txtSymbol}>{symbol}</Text> */}
        </View>
        <View style={styles.viewPrice}>
            <Text style={styles.txtPrice}>{formatter.format(total)}</Text>
            <Text style={styles.txtQuantity}>{quantity} {symbol}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PortfolioItem