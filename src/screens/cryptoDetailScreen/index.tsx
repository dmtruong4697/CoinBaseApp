import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import { getCoinInfo, getQuoteLatest } from '../../services/cryptocurrency';
import { generateRandomGraphData, generateSinusGraphData } from '../../data/graph';
import { useColors } from '../../hooks/useColors';
import { LineGraph, SelectionDot } from 'react-native-graph';
import { GraphRange } from 'react-native-graph/lib/typescript/LineGraphProps';

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

const POINT_COUNT = 70;
const POINTS = generateRandomGraphData(POINT_COUNT)
const COLOR = '#6a7ee7'
const GRADIENT_FILL_COLORS = ['#7476df5D', '#7476df4D', '#7476df00']
const SMALL_POINTS = generateSinusGraphData(9)

const CryptoDetailScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CryptoDetail'>>();
    const {id} = route.params;

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

    useEffect(() => {
        fetchData();
        fetchQuoteData();
        // console.log(quoteData)
    });

    const [isFavorite, setIsFavorite] = useState(false);
    const [tabIndex, setTabIndex] = useState(1);

    // graph
    const [points, setPoints] = useState(POINTS);

    const colors = useColors()

    const [isAnimated, setIsAnimated] = useState(true)
    const [enablePanGesture, setEnablePanGesture] = useState(true)
    const [enableFadeInEffect, setEnableFadeInEffect] = useState(false)
    const [enableCustomSelectionDot, setEnableCustomSelectionDot] =
      useState(false)
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

  
  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>

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

        <View style={styles.viewChart}>
            <LineGraph
                style={{
                        alignSelf: 'center',
                        // width: '100%',
                        flex: 1,
                        aspectRatio: 1.4,
                        marginVertical: 20,
                }}
                animated={isAnimated}
                color={'#FFBE55'}
                points={points}
                gradientFillColors={enableGradient ? GRADIENT_FILL_COLORS : undefined}
                enablePanGesture={enablePanGesture}
                enableFadeInMask={enableFadeInEffect}
                onGestureStart={() => {}}
                onPointSelected={(p) => {}}
                onGestureEnd={() => {}}
                SelectionDot={enableCustomSelectionDot ? SelectionDot : undefined}
                range={range}
                enableIndicator={enableIndicator}
                horizontalPadding={enableIndicator ? 15 : 0}
                indicatorPulsating={indicatorPulsating}
            />
        </View>

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

    </ScrollView>
  )
}

export default CryptoDetailScreen    