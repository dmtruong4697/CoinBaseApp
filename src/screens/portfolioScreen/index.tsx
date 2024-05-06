import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PortfolioData } from '../../data/portfolioData';
import PortfolioItem from '../../components/portfolioItem';
import { getPortfolio } from '../../firebase/services/portfolioService';
import { useSelector } from 'react-redux';

interface IProps {}

const PortfolioScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const currentUser = useSelector((state: any) => state.auth.currentUser);

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const isFocus = useIsFocused();
    const [data, setData] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const fetchData = async() => {
      const result = await getPortfolio(currentUser.uid);
      setTotal(result.total);
      setData(result.data);
    }

    useEffect(() => {
      fetchData();
    },[isFocus]);

  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>
        <View style={styles.viewHeader}>
          <Text style={styles.txtBalance}>Portfolio balance</Text>
          <Text style={styles.txtTotal}>{formatter.format(total)}</Text>
        </View>

        <View style={styles.viewList}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({item}) => (
              <PortfolioItem
                id={item.id}
                iconUrl={item.crypto.logo}
                name={item.crypto.name}
                quantity={item.quantity}
                symbol={item.crypto.symbol}
                total={item.quantity*item.price}
                price={item.price}
              />
            )}
            contentContainerStyle={{gap: 10,}}
          />
        </View>
    </ScrollView>
  )
}

export default PortfolioScreen    