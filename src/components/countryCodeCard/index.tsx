import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';

interface IProps {
    id: string,
    name: string,
    code: string,
    iconUrl: string,
    onPress: () => void,
}

const CountryCodeCard: React.FC<IProps> = ({code, iconUrl, id, name, onPress}) => {

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={onPress}
    >
       <Image style={styles.imgFlag}/>
       <Text style={styles.txtName}>{name}</Text>
       <Text style={styles.txtCode}>+{code}</Text>
    </TouchableOpacity>
  )
}

export default CountryCodeCard