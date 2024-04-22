import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, TextInput, NativeSyntheticEvent, TextInputFocusEventData, InputModeOptions, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';

interface IProps {
  title?: string;
  containerStyle?: ViewStyle;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string;
  inputMode?: InputModeOptions;
  isPassword?: boolean;
}

const InputField: React.FC<IProps> = ({title, onBlur, onChangeText, containerStyle, value, inputMode, isPassword}) => {

  const [isFocus, setIsFocus] = useState(false);
  const [isShow, setIsShow] = useState(true);

  return (
    <View style={styles.viewContainer}>
      {(title) && <Text style={[styles.txtTitle, {color: (isFocus)? colors.PrimaryColor: '#111111',}]}>{title}</Text>}
      <View style={[styles.inputContainer, {
        borderColor: (isFocus)? colors.PrimaryColor: '#CFCFCF',
        borderWidth: (isFocus)? 2: 1,
      }]}>
        <TextInput
          secureTextEntry={(isPassword)? isShow:false}
          style={[styles.inputField, {color: (isFocus)? '#707070':'#707070',}]}
          onBlur={() => {setIsFocus(false)}}
          onChangeText={onChangeText}
          // value={value}
          inputMode={inputMode}
          onFocus={() => {setIsFocus(true)}}
        />

        {
          (isPassword) && 
        <TouchableOpacity
          onPress={() => {setIsShow(!isShow)}}
        >
          {isShow && <Image style={styles.imgShow} source={require('../../../assets/icons/inputField/show.png')}/>}
          {!isShow && <Image style={styles.imgShow} source={require('../../../assets/icons/inputField/hide.png')}/>}
        </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default InputField