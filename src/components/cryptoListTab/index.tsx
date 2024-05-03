import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, ImageSourcePropType, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CryptoItem from '../cryptoItem';

interface IProps {
    id: string,
    name: string,
}

const CryptoData = [
    {
      id:'1',
      name:'Bitcoin',
      price:38650.31,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      symbol:'BTC',
      percentChange:3.88,
    },
    {
      id:'2',
      name:'Bitcoin',
      price:38650.31,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      symbol:'BTC',
      percentChange:3.88,
    },
    {
        id:'3',
        name:'Bitcoin',
        price:38650.31,
        iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        symbol:'BTC',
        percentChange:3.88,
      },
      {
        id:'4',
        name:'Bitcoin',
        price:38650.31,
        iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        symbol:'BTC',
        percentChange:3.88,
      },
      {
        id:'5',
        name:'Bitcoin',
        price:38650.31,
        iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        symbol:'BTC',
        percentChange:3.88,
      },
      {
        id:'6',
        name:'Bitcoin',
        price:38650.31,
        iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        symbol:'BTC',
        percentChange:3.88,
      },
  ]

const CryptoListTab: React.FC<IProps> = ({id, name}) => {

  return (
    <ScrollView style={styles.viewContainer} scrollEnabled>
        <FlatList
          data={CryptoData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CryptoItem
                id={item.id}
                name={item.name}
                iconUrl={item.iconUrl}
                percentChange={item.percentChange}
                price={item.price}
                symbol={item.symbol}
            />
          )}
          style={{width: '100%',}}
          showsVerticalScrollIndicator={false}
        />
    </ScrollView>
  )
}

export default CryptoListTab