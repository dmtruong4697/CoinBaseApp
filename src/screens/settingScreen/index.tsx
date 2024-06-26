import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingAccountData, SettingSecurityData } from '../../data/setting';
import SettingItem from '../../components/settingItem';
import Button from '../../components/button';
import auth from '@react-native-firebase/auth';
import { signout } from '../../firebase/services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { UserType } from '../../redux/actions/auth.action';

interface IProps {}

const SettingScreen: React.FC<IProps>  = ({}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const currentUser = useSelector((state: any) => state.auth.currentUser);
    const dispatch = useDispatch();

    const handleSignOut = async() => {
      await signout(currentUser.uid, dispatch, navigation);
    }
  
  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>
      <View style={styles.viewUserInfo}>
        <Text style={styles.txtEmail}>{currentUser?.userEmail}</Text>
        <Text style={styles.txtName}>{currentUser?.displayName}</Text>
      </View>

      <TouchableOpacity
        style={styles.viewShare}
        onPress={() => {
          console.log(currentUser);
        }}
      >
        <Text style={styles.txtShare}>Share your love of crypto and get $10 of free Bitcoin</Text>
        <Image style={styles.imgBitcoin} source={require('../../../assets/icons/settingScreen/bitcoin.png')} />
      </TouchableOpacity>

      <View style={styles.viewGroup}>
        <Text style={styles.txtGroupTitle}>Payment Methods</Text>
        <Button
          onPress={() => {
            navigation.navigate('AddCard');
          }}
          title='Add a payment method'
          type='solid'
        />
      </View>

      <View style={styles.viewGroup}>
        <Text style={styles.txtGroupTitle}>Account</Text>
        <FlatList
          data={SettingAccountData}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({item}) => (
            <SettingItem
              id={item.id}
              title={item.title}
              onPress={() => item.onPress(navigation)}
            />
          )}
          contentContainerStyle={{gap: 5,}}
        />
      </View>

      <View style={styles.viewGroup}>
        <Text style={styles.txtGroupTitle}>Sercurity</Text>
        <FlatList
          data={SettingSecurityData}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({item}) => (
            <SettingItem
              id={item.id}
              title={item.title}
              onPress={() => item.onPress(navigation)}
              renderToggle={item.renderToggle}
              toggleStatus={item.toggleStatus}
              description={item.description}
            />
          )}
          contentContainerStyle={{gap: 5,}}
        />
      </View>

      <View style={styles.viewGroup}>
        <Button
          title='Sign out'
          onPress={() => {
            handleSignOut();
          }}
          type='solid'
          titleStyle={{color: '#E25C5C'}}
        />
      </View>
    </ScrollView>
  )
}

export default SettingScreen    