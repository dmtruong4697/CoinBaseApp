import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PortfolioData } from '../../data/portfolioData';
import PortfolioItem from '../../components/portfolioItem';

interface IProps {}

const PortfolioScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>
        <View style={styles.viewHeader}>
          <Text style={styles.txtBalance}>Portfolio balance</Text>
          <Text style={styles.txtTotal}>$13.84</Text>
        </View>

        <View style={styles.viewList}>
          <FlatList
            data={PortfolioData}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({item}) => (
              <PortfolioItem
                id={item.id}
                iconUrl={item.iconUrl}
                name={item.name}
                quantity={item.quantity}
                symbol={item.symbol}
                total={item.total}
              />
            )}
            contentContainerStyle={{gap: 10,}}
          />
        </View>
    </ScrollView>
  )
}

export default PortfolioScreen    