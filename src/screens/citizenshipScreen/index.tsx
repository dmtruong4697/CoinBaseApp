
import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/mainNavigator';
import Button from '../../components/button';
import InputField from '../../components/inputField';
import { Controller, useForm } from 'react-hook-form';
import StepIndicator from '../../components/stepIndicator';
import { colors } from '../../constants/colors';
import RBSheet from 'react-native-raw-bottom-sheet';

interface IProps {}

const CitizenshipScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [country, setCountry] = useState('');

    const refRBSheet = useRef();
  
  return (
    <SafeAreaView style={styles.viewContainer}>

        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/cancel.png')}/>
            </TouchableOpacity>

            <StepIndicator
                totalStep={3}
                currentStep={2}
            />
        </View>

        <View style={styles.viewFormContainer}>
            <Text style={styles.txtTitle}>What’s your citenzship</Text>
            <Text style={styles.txtDescription}>If you’re a zitizen of more than one country, please pick one</Text>

            <View style={styles.viewInput}>
                <View style={styles.viewInputContainer}>
                    <Text style={styles.txtInputTitle}>Citizenship</Text>
                    <TouchableOpacity 
                        style={styles.inputContainer}
                        onPress={() => refRBSheet.current.open()}
                    >
                        <Text style={styles.txtCode}>{country}</Text>
                        <Image style={styles.imgDown} source={require('../../../assets/icons/twoStepScreen/down.png')}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

        <View style={styles.viewButtonGroup}>
            <Button
                title='Continue'
                type='default'
                onPress={() => {
                    navigation.navigate('AuthenCode');
                }}
            />
        </View>

      {/* List Menu */}
      <RBSheet 
        ref={refRBSheet} 
        draggable={true} 
        dragOnContent 
        useNativeDriver={false}
        customStyles={{
            container: {
                // backgroundColor: 'pink',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },
            draggableIcon: {
                backgroundColor: '#FFFFFF',
            }
        }}
      >
            <View style={{
            }}>

            </View>
      </RBSheet>

    </SafeAreaView>
  )
}

export default CitizenshipScreen    