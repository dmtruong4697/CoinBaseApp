import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';

interface IProps {

}

const PolygonItem: React.FC<IProps> = ({}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

  return (
    <View
        style={styles.viewContainer}
    >
        <Image style={styles.imgIcon} source={require('../../../assets/icons/polygon/polygon.png')}/>
        <View style={styles.viewText}>
            <Text style={styles.txtName}>Polygon</Text>
            <Text style={styles.txtSymbol}>Earn $3 MATIC</Text>
        </View>
        <TouchableOpacity
            onPress={() => {

            }}
        >
            <Text style={styles.txtWatch}>Watch video</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PolygonItem