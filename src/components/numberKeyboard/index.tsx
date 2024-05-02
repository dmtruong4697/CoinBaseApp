import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image, FlatList } from 'react-native'
import React, { ContextType, useContext, useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NumberKeyboardData } from '../../data/numberKeyboard';

interface IProps {
    context: React.Context<any>;
}

const NumberKeyboard: React.FC<IProps> = ({context}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {value, setValue} = useContext(context);

    const handleDelete = (str: string): string => {
        return str.slice(0, -1);
    }

    const handlePress = (name: string) => {
        if(name == '<-') {
            const newValue = handleDelete(value);
            setValue(newValue);
        } else {
            const newValue = value + name;
            setValue(newValue);
        }
    }
  return (
    <View style={styles.viewContainer}>
        <FlatList
            data={NumberKeyboardData}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={styles.btnItem}
                    onPress={() => {
                        handlePress(item.name)
                    }}
                >
                    <Text style={styles.txtItem}>{item.name}</Text>
                </TouchableOpacity>
            )}
            numColumns={3}
            contentContainerStyle={{gap: 10,}}
        />
    </View>
  )
}

export default NumberKeyboard