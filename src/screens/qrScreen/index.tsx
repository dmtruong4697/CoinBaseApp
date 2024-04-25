import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, ToastAndroid } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';

interface IProps {}

const QRScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CryptoDetail'>>();
    const {id} = route.params;

    const [addressCode, setAddressCode] = useState('');

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          'Copied to clipboard!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      };
  
  return (
    <View style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>

            <Text style={styles.txtHeaderTitle}>Receive Bitcoin</Text>
        </View>

        <View style={styles.viewQRCard}>
            <View style={styles.viewQR}>
                <QRCode
                    value="Just some string value"
                    // logo={{uri: base64Logo}}
                    size={198}
                    logoSize={30}
                    logoBackgroundColor='transparent'
                />
            </View>

            <View style={styles.viewQRInfo}>
                <View style={styles.viewAddress}>
                    <Text style={styles.txtAddress}>Wallet address</Text>
                    <Text style={styles.txtCode}>3K9CKsePi...Df5NfQh7iK</Text>
                </View>
                <TouchableOpacity
                    style={styles.btnCopy}
                    onPress={() => {
                        Clipboard.setString(addressCode);
                        showToastWithGravity();
                    }}
                >
                    <Text style={styles.txtCopy}>Copy</Text>
                </TouchableOpacity>
            </View>

        </View>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Share address'
                onPress={() => {

                }}
            />
        </View>
    </View>
  )
}

export default QRScreen    