import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { generateRandomGraphData, generateSinusGraphData, hapticFeedback } from '../../data/graph';
import { useColors } from '../../hooks/useColors';
import { LineGraph, SelectionDot } from 'react-native-graph';
import { GraphRange } from 'react-native-graph/lib/typescript/LineGraphProps';
import CryptoWalletItem from '../../components/cryptoWalletItem';
import Button from '../../components/button';
import ResourceItem from '../../components/resourceItem';
import { ResourceItemData } from '../../data/resourceItem';

interface IProps {}

const TabData = [
    {
        id: '1',
        name: '1H',
    },
    {
        id: '2',
        name: '1D',
    },
    {
        id: '3',
        name: '1W',
    },
    {
        id: '4',
        name: '1M',
    },
    {
        id: '5',
        name: '1Y',
    },
    {
        id: '6',
        name: 'All',
    },
]

const POINT_COUNT = 100;
const POINTS = generateRandomGraphData(POINT_COUNT)
const COLOR = '#6a7ee7'
const GRADIENT_FILL_COLORS = ['#7476df5D', '#7476df4D', '#7476df00']
const SMALL_POINTS = generateSinusGraphData(9)

const CryptoDetailScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CryptoDetail'>>();
    const {id, crypto} = route.params;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const [data, setData] = useState<any>({});
    const [quoteData, setQuoteData] = useState<any>({
        'quote': {
            'USD': {
                "price": 0,
                "volume_24h": 0,
                "volume_change_24h": 0,
                "percent_change_1h": 0,
                "percent_change_24h": 0,
                "percent_change_7d": 0,
                "percent_change_30d": 0,
                "percent_change_60d": 0,
                "percent_change_90d": 0,
                "market_cap": 0,
            }
        }
    });
    const fetchData = async() => {
        let Data = await getCoinInfo(Number(id));
        const ID = id.toString();
        setData(Data[id]);
    }

    const fetchQuoteData = async() => {
        let QuoteData = await getQuoteLatest(Number(id));
        const ID = id.toString();
        setQuoteData(QuoteData[id]);
        // console.log(quoteData.USD.price);
    }

    const [isFavorite, setIsFavorite] = useState(false);
    const [tabIndex, setTabIndex] = useState(1);

    // graph
    const [points, setPoints] = useState(POINTS);

    const colors = useColors()

    const [isAnimated, setIsAnimated] = useState(true)
    const [enablePanGesture, setEnablePanGesture] = useState(true)
    const [enableFadeInEffect, setEnableFadeInEffect] = useState(true)
    const [enableCustomSelectionDot, setEnableCustomSelectionDot] =
      useState(true)
    const [enableGradient, setEnableGradient] = useState(false)
    const [enableRange, setEnableRange] = useState(false)
    const [enableIndicator, setEnableIndicator] = useState(false)
    const [indicatorPulsating, setIndicatorPulsating] = useState(false)

    const highestDate = useMemo(
        () =>
          points.length !== 0 && points[points.length - 1] != null
            ? points[points.length - 1]!.date
            : undefined,
        [points]
      )
      const range: GraphRange | undefined = useMemo(() => {
        // if range is disabled, default to infinite range (undefined)
        if (!enableRange) return undefined
    
        if (points.length !== 0 && highestDate != null) {
          return {
            x: {
              min: points[0]!.date,
              max: new Date(highestDate.getTime() + 50 * 1000 * 60 * 60 * 24),
            },
            y: {
              min: -200,
              max: 200,
            },
          }
        } else {
          return {
            y: {
              min: -200,
              max: 200,
            },
          }
        }
    }, [enableRange, highestDate, points])

    useEffect(() => {
        // fetchData();
        // fetchQuoteData();
        // console.log(quoteData)
    });
  
  return (
    <ScrollView contentContainerStyle={styles.viewContainer} scrollEnabled={true}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/back.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.viewTopInfo}>
            <View style={styles.viewPriceInfo}>
                <Text style={styles.txtNamePrice}>{data.name} price</Text>
                <Text style={styles.txtPrice}>{formatter.format(quoteData.quote['USD'].price)}</Text>
                <Text style={[styles.txtQuote, {
                    color: (quoteData.quote['USD'].percent_change_24h > 0)? '#3F845F':'#E25C5C',
                }]}>
                    {(quoteData.quote['USD'].percent_change_24h > 0)? '+':'-'}
                    {formatter.format(quoteData.quote['USD'].volume_change_24h)}
                    ({Math.abs(quoteData.quote['USD'].percent_change_24h)}%)
                </Text>
            </View>

            <TouchableOpacity
                style={[styles.btnFavorite, {backgroundColor: (isFavorite)? '#FFBE55':'#FFFFFF'}]}
                onPress={() => {setIsFavorite(!isFavorite)}}
            >
                <Image style={styles.imgFavorite} source={require('../../../assets/icons/cryptoDetailScreen/star.png')}/>
            </TouchableOpacity>
        </View>

        {/* <ScrollView horizontal contentContainerStyle={styles.viewChart} scrollEnabled={true} style={{height: 364}}> */}
            <LineGraph
                style={{
                        alignSelf: 'center',
                        width: '100%',
                        height: 364,
                        // backgroundColor: 'pink',
                        // flex: 1,
                        aspectRatio: 1.4,
                        marginVertical: 20,
                }}
                animated={isAnimated}
                color={'#FFBE55'}
                points={points}
                gradientFillColors={enableGradient ? GRADIENT_FILL_COLORS : undefined}
                enablePanGesture={enablePanGesture}
                enableFadeInMask={enableFadeInEffect}
                onGestureStart={() => {hapticFeedback()}}
                onPointSelected={(p) => {}}
                onGestureEnd={() => {}}
                SelectionDot={enableCustomSelectionDot ? SelectionDot : undefined}
                range={range}
                enableIndicator={enableIndicator}
                horizontalPadding={enableIndicator ? 15 : 0}
                indicatorPulsating={indicatorPulsating}
                // TopAxisLabel={() => <AxisLabel arrayLength={100} index={}}
                // BottomAxisLabel={() => <Text>Min</Text>}
            />
        {/* </ScrollView> */}

        <View style={styles.viewTabGroup}>
            <FlatList
                data={TabData}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={styles.btnTab}
                        onPress={() => {
                            setTabIndex(index);
                        }}
                    >
                        <Text style={[styles.txtTab, {color: (index == tabIndex)? '#FFBE55':'#707070'}]}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                horizontal
                contentContainerStyle={{justifyContent: 'space-between',width: '100%',}}
            />
        </View>

        {/* view wallet */}
        <View style={styles.viewWallet}>
            <CryptoWalletItem
                id='1'
                name={data.name}
                iconUrl={data.logo}
                symbol={data.symbol}
                quantity={0}
                total={0}
            />

            <Button
                title='Trade'
                onPress={() => {
                    navigation.navigate('BuyCrypto', {crypto: crypto});
                }}
            />

            <View style={styles.viewSuggest}>
                <View style={styles.viewText}>
                    <Text style={styles.txtSuggestTitle}>When’s the best time to buy?</Text>
                    <View style={styles.viewDescription}>
                        <Text style={styles.txtSuggestDescription}>Timing any invesment is hard, which is why many investors use dollar cost averaging.</Text>
                    </View>
                </View>

                <Image style={styles.imgSuggest} source={require('../../../assets/illustrations/cryptoDetailScreen/cart.png')}/>
            </View>
        </View>

        {/* view about */}
        <View style={styles.viewAbout}>
            <Text style={styles.txtTitle}>About {data.name}</Text>
            <Text style={styles.txtAbout}>{data.description}</Text>
        </View>

        {/* view resource */}
        <View style={styles.viewResource}>
            <Text style={styles.txtTitle}>Resources</Text>
            <FlatList
                data={ResourceItemData}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                renderItem={({item}) => (
                    <ResourceItem
                        id={item.id}
                        name={item.name}
                        iconUrl={item.iconUrl}
                        link=''
                    />
                )}
                contentContainerStyle={{gap: 10,}}
            />
        </View>

        {/* market stat */}
        <View style={styles.viewMarketStat}>
            <Text style={styles.txtTitle}>Market stats</Text>
        </View>

    </ScrollView>
  )
}

export default CryptoDetailScreen    