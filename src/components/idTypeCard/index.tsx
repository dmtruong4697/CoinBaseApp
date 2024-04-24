import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';

interface IProps {
    id: string,
    name: string,
    description?: string,
    iconUrl?: string,
    onPress: () => void,
}

const IDTypeCard: React.FC<IProps> = ({description, iconUrl, id, name, onPress}) => {

  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={onPress}
    >
        <Image style={styles.imgArrow} source={require('../../../assets/icons/idType/idType.png')}/>
        <View style={styles.viewText}>
            <Text style={styles.txtName}>{name}</Text>
            {(description != '') && <Text style={styles.txtDescription}>{description}</Text>}
        </View>
        <Image style={styles.imgArrow} source={require('../../../assets/icons/idType/right.png')}/>
    </TouchableOpacity>
  )
}

export default IDTypeCard