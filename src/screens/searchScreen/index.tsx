import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, ToastAndroid } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import { colors } from '../../constants/colors';

interface IProps {}

const SearchScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [searchText, setSearchText] = useState('');
    const [isFocus, setIsFocus] = useState(false);
  
  return (
    <SafeAreaView style={styles.viewContainer}>
        <View style={styles.viewHeader}>
            <View style={[styles.viewInputContainer, {
                borderWidth: (isFocus)? 2:1,
                borderColor: (isFocus)? colors.PrimaryColor:colors.BorderColor,
            }]}>
                <TextInput
                    style={styles.inputField}
                    onFocus={() => {setIsFocus(true)}}
                    onBlur={() => {setIsFocus(false)}}
                    onChangeText={(text) => {setSearchText(text)}}
                    value={searchText}
                />
                <TouchableOpacity
                    style={styles.btnClear}
                    onPress={() => {
                        setSearchText('');
                    }}
                >
                    <Image style={styles.imgClear} source={require('../../../assets/icons/searchScreen/clear.png')}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text style={styles.txtCancel}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SearchScreen    