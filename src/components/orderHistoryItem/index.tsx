import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrderType } from '../../firebase/services/cryptoService';

interface IProps {
    order: OrderType,
}

const OrderHistoryItem: React.FC<IProps> = ({order}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => {

        }}
    >
        <View style={styles.viewGroup}>
            <Text style={styles.txtTop}>Bought {order.crypto.name}</Text>
            <Text style={styles.txtTop}>{order.quantity} {order.crypto.symbol}</Text>
        </View>

        <View style={styles.viewGroup}>
            <Text style={styles.txtBottom}>Using {order.cardId}</Text>
            <Text style={styles.txtBottom}>{formatter.format(order.total)}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default OrderHistoryItem