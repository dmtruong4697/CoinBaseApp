
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
import { CountryCodeData } from '../../data/countryCode';
import CountryCodeCard from '../../components/countryCodeCard';
import { IDTypeData } from '../../data/iDType';
import IDTypeCard from '../../components/idTypeCard';

interface IProps {}

const SelectIDTypeScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [type, setType] = useState('1');
  
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
                currentStep={3}
            />
        </View>

        <View style={styles.viewFormContainer}>
            <Text style={styles.txtTitle}>Select your ID type</Text>
            <Text style={styles.txtDescription}>We’ll take 2 pictures of your ID. What type of ID do you want to use?</Text>
            <FlatList
                data={IDTypeData}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                renderItem={({item}) => (
                    <IDTypeCard
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        onPress={() => {
                            setType(item.id);
                            navigation.navigate('Camera');
                            // navigation.navigate('IDPhoto');
                        }}
                    />
                )}
                contentContainerStyle={{gap: 10, paddingBottom: 50,}}
            />
        </View>

        <View style={styles.viewButtonGroup}>
            <View style={styles.viewWarning}>
                <Text style={styles.txtWarning}>Your photo ID and actions captured during the ID verification process may constitute biometric data. Please see our Privacy Polici for more information about how we store and use your biometric data.</Text>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default SelectIDTypeScreen    