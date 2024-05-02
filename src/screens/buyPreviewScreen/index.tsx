import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, ToastAndroid, Linking } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';

interface IProps {}

const BuyPreviewScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'BuyPreview'>>();
    const {orderId} = route.params;
  
  return (
    <View style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>

            <Text style={styles.txtHeaderTitle}>Order preview</Text>
        </View>

        <Text style={styles.txtQuantity}>8.52889997 MATIC</Text>

        <View style={styles.viewInfo}>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>MATIC price</Text>
                <Text style={styles.txtItemContent}>SGD 2.17</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Payment method</Text>
                <Text style={styles.txtItemContent}>Dbs Bank Ltd</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Purchase</Text>
                <Text style={styles.txtItemContent}>SGD 18.51</Text>
            </View>
            <View style={[styles.viewInfoItem, {marginBottom: 0,}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.txtItemName}>Coinbase fee  </Text>
                    <TouchableOpacity
                        style={styles.btnMore}
                    ><Text style={styles.txtMore}>i</Text></TouchableOpacity>
                </View>
                <Text style={styles.txtItemContent}>SGD 1.49</Text>
            </View>
            <Text style={[styles.txtItemContent, {fontSize: 14,}]}>Includes taxes</Text>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtTotal}>Total</Text>
                <Text style={styles.txtTotal}>SGD 20.00</Text>
            </View>

            <View style={styles.viewAdditionInfo}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtAdditonInfo}>Processed by </Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('http://google.com')
                        }}
                    >
                        <Text style={[styles.txtAdditionLink, {textDecorationLine: 'underline'}]}>Coinbase UK, Lrd.</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtAdditonInfo}>Crypto markets are unipue. </Text>
                    <TouchableOpacity>
                        <Text style={styles.txtAdditionLink}>Learn more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.viewBottom}>
            <Button
                title='Buy now'
                onPress={() => {
                    navigation.navigate('OrderPreview', {orderId: ''})
                }}
            />
        </View>
    </View>
  )
}

export default BuyPreviewScreen    