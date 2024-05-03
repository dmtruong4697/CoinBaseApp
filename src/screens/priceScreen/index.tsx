import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { CryptoListTabData } from '../../data/cryptoListTab';
import CryptoListTab from '../../components/cryptoListTab';
import { colors } from '../../constants/colors';

interface IProps {}

const PriceScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.ViewTopInfo}>
        <View style={styles.viewTrending}>
          <Text style={styles.txtPast}>In the past 24 hours</Text>
          <Text style={styles.txtTrend}>Market is up +4.19%</Text>
        </View>

        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => {
            navigation.navigate('Search');
          }}
        >
          <Image style={styles.imgSearch} source={require('../../../assets/icons/priceScreen/search.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.viewTabGroup}>
        <FlatList
          data={CryptoListTabData}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({item, index}) => (
              <TouchableOpacity
                  style={[styles.btnTab, {backgroundColor: (index == tabIndex)? '#F5F8FE':'transparent'}]}
                  onPress={() => {
                      setTabIndex(index);
                  }}
              >
                  <Text style={[styles.txtTab, {color: (index == tabIndex)? colors.PrimaryColor:colors.PrimaryTextColor}]}>{item.name}</Text>
              </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{width: '100%',height: '100%', gap: 10,}}
        />
      </View>

      <CryptoListTab
        id='1'
        name={CryptoListTabData[tabIndex].name}
      />
    </SafeAreaView>
  )
}

export default PriceScreen    