import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../../components/button';
import WatchlistItem from '../../components/watchlistItem';
import TopMoverItem from '../../components/topMoverItem';
import { getListingLatest } from '../../services/cryptocurrency';
import PolygonItem from '../../components/polygonItem';

interface IProps {}

const WatchlistData = [
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
]

const TopMovertData = [
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
]

const HomeScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [data, setData] = useState<any[]>([]);
    const fetchData = async() => {
      let Data = await getListingLatest(5);
      setData(Data);
      // console.log(Data.length);
    }

    useEffect(() => {
      fetchData();
    },[])
  
  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>
        <View style={styles.viewIntroGroup}>
          <Image style={styles.imgWallet} source={require('../../../assets/illustrations/home/wallet.png')}/>
          <Text style={styles.txtTitle}>Welcome to Coinbase!</Text>
          <Text style={styles.txtDescription}>Make your first investment today</Text>

          <Button
            title='Add payment method'
            type='default'
            onPress={() => {

            }}
          />
        </View>

        {/* watchlist */}
        <View style={styles.viewWatchList}>
          <Text style={styles.txtGroupTitle}>Watchlist</Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({item}) => (
              <WatchlistItem
                id={item.id}
                iconUrl={'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'}
                name={item.name}
                price={item.price}
                symbol={item.symbol}
                percentChange={item.percentChange}
              />
            )}
            contentContainerStyle={{gap: 10,}}
          />
        </View>

        {/* top movers */}
        <View style={styles.viewWatchList}>
          <Text style={styles.txtGroupTitle}>Top movers</Text>
          <FlatList
            data={TopMovertData}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            renderItem={({item}) => (
              <TopMoverItem
                id={item.id}
                iconUrl={item.iconUrl}
                name={item.name}
                price={item.price}
                symbol={item.symbol}
                percentChange={item.percentChange}
              />
            )}
            horizontal
            contentContainerStyle={{gap: 10, }}
          />
        </View>

        {/* polygon */}
        <View style={styles.viewWatchList}>
          <Text style={styles.txtGroupTitle}>Learn about Plygon</Text>
          <PolygonItem/>
          <Text style={styles.txtBlockChain}>Building an internet of blockchains</Text>
        </View>
    </ScrollView>
  )
}

export default HomeScreen    