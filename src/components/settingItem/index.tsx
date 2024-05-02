import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
    id: string,
    title: string,
    onPress: () => void,
    description?: string,
    renderToggle?: boolean,
    toggleStatus?: boolean,
}

const SettingItem: React.FC<IProps> = ({id, onPress, title, description, renderToggle, toggleStatus}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [toggle, setToggle] = useState(toggleStatus);
  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={onPress}
    >
        <View style={styles.viewText}>
            <Text style={styles.txtTitle}>{title}</Text>
            {(description) && <Text style={styles.txtDescription}>{description}</Text>}
        </View>

        {
            (!renderToggle) && 
            <Image style={styles.imgRight} source={require('../../../assets/icons/settingItem/right.png')}/>
        }

        {
            (renderToggle) && 
            <TouchableOpacity
                style={[styles.btnToggle, {
                    justifyContent: (toggle)? 'flex-end':'flex-start',
                    backgroundColor: (toggle)? colors.PrimaryColor:'#CFCFCF',
                }]}
                onPress={() => {
                    setToggle(!toggle);
                }}
            >
                <View style={styles.btnTogleItem}/>
            </TouchableOpacity>
        }
    </TouchableOpacity>
  )
}

export default SettingItem