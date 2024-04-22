import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';

interface IProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  type?: 'default'|'solid';
  onPress: () => void;
}

const Button: React.FC<IProps> = ({title, onPress, containerStyle, titleStyle, type}) => {

  return (
    <TouchableOpacity
        style={[styles.btnContainer,{
            backgroundColor: (type == 'solid')? '#FFFFFF':colors.PrimaryColor,
            borderColor: (type == 'solid')? '#CFCFCF':colors.PrimaryColor,
        }, containerStyle]}
        onPress={onPress}
    >
        <Text style={[styles.txtTitle, {
            color: (type == 'solid')? '#111111':'#FFFFFF',
        }, titleStyle]}
        >{title}</Text>
    </TouchableOpacity>
  )
}

export default Button