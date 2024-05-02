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
    code: string,
    unit: string,
    limit: number,
    type: 'default'|'second',
    onPress: () => void,
    containerStyle?: ViewStyle,
}

const PaymentCard: React.FC<IProps> = ({id, code, limit, name, onPress, type, unit, containerStyle}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const SecondStyle: TextStyle = {
        color: (type == 'second')? colors.PrimaryColor: colors.PrimaryTextColor,
    }

  return (
    <TouchableOpacity
        style={[styles.viewContainer, {
            borderWidth: (type == 'second')? 0:1,
            backgroundColor: (type == 'second')? '#F5F8FE':'transparent',
        }, containerStyle]}
        onPress={onPress}
    >
        <Image style={styles.imgIcon} source={require('../../../assets/icons/paymentCard/credit-card.png')}/>
        <View style={styles.viewInfo}>
            <Text style={[styles.txtName, SecondStyle]}>{name}</Text>
            <Text style={[styles.txtCode, SecondStyle]}>{code}</Text>
        </View>
        <Text style={[styles.txtLimit, SecondStyle]}>{unit} {limit} limit</Text>
    </TouchableOpacity>
  )
}

export default PaymentCard