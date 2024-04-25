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
    link: string,
    iconUrl: ImageSourcePropType,   

}

const ResourceItem: React.FC<IProps> = ({id, name, iconUrl, link}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
      
  return (
    <View style={styles.viewContainer}>
        <Image style={styles.imgIcon} source={iconUrl}/>
        <TouchableOpacity
            onPress={() => {

            }}
        >
            <Text style={styles.txtLink}>{name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ResourceItem