import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, ToastAndroid, Linking } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';

interface IProps {}

const OrderPreviewScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'BuyPreview'>>();
    const {order} = route.params;
  
  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>

            <Text style={styles.txtHeaderTitle}>Order preview</Text>
        </View>

        <View style={styles.viewPrice}>
            <Text style={styles.txtCrypto}>8.5289 MATIC</Text>
            <Text style={styles.txtDollar}>$15.05</Text>
        </View>

        <View style={styles.viewInfo}>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Reference Code</Text>
                <Text style={styles.txtItemContent}>ABCDEFGH</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Price per coin</Text>
                <Text style={styles.txtItemContent}>SGD 2.17</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Payment Method</Text>
                <Text style={styles.txtItemContent}>Dbs Bank Ltd</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Fee</Text>
                <Text style={styles.txtItemContent}>SGD 1.49</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Subtotal</Text>
                <Text style={styles.txtItemContent}>SGD 18.51</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Total</Text>
                <Text style={styles.txtItemContent}>SGD 20.00</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Date</Text>
                <Text style={styles.txtItemContent}>41:31 PM - Jun 4, 2021</Text>
            </View>
            <View style={styles.viewInfoItem}>
                <Text style={styles.txtItemName}>Status</Text>
                <Text style={styles.txtItemContent}>Completed</Text>
            </View>

        </View>

        <View style={styles.viewBottom}>
            <Button
                title='Continue'
                onPress={() => {
                    navigation.navigate('HomeNavigator');
                }}
            />
        </View>
    </ScrollView>
  )
}

export default OrderPreviewScreen    