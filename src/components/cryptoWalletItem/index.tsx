import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getPortfolioByCrypto } from '../../firebase/services/portfolioService';
import { useSelector } from 'react-redux';
import { CryptoType } from '../../firebase/services/cryptoService';

interface IProps {
    id: string,
    crypto: CryptoType,
    total: number,
    quantity: number,
}

const CryptoWalletItem: React.FC<IProps> = ({id, total, quantity, crypto}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const currentUser = useSelector((state: any) => state.auth.currentUser);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const [portfolio, setPortfolio] = useState<any>({});
    const fetchData = async() => {
        const wallet = await getPortfolioByCrypto(currentUser.uid, crypto);
        if(wallet == undefined) {
            setPortfolio({
                uid: currentUser.uid,
                id: '',
                crypto: crypto,
                quantity: 0,
                total: 0,
                price: 0,
            })
        } else setPortfolio(wallet);
    }

    useEffect(() => {
        fetchData();
    },[])
      
  return (
    <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => {
            navigation.navigate('CryptoWalletDetail', {portfolio: portfolio});
            // console.log(portfolio)
        }}
    >
        <Image style={styles.imgIcon} source={{uri: crypto.logo}}/>
        <View style={styles.viewText}>
            <Text style={styles.txtName}>{crypto.symbol} Wallet</Text>
            {/* <Text style={styles.txtSymbol}>{symbol}</Text> */}
        </View>
        <View style={styles.viewPrice}>
            <Text style={styles.txtPrice}>{formatter.format(portfolio!.price*portfolio.quantity)}</Text>
            <Text style={styles.txtQuantity}>{portfolio!.quantity} {crypto.symbol}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CryptoWalletItem