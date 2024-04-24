
import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput, useWindowDimensions, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import StepIndicator from '../../components/stepIndicator';
import { Camera, PhotoFile, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import Reanimated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedProps, useSharedValue } from 'react-native-reanimated'
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from '../../components/button';
import { RootStackParamList } from '../../navigator/mainNavigator';

interface IProps {}

const IDPhotoScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute<RouteProp<RootStackParamList, 'IDPhoto'>>();
    const {photo} = route.params;
  
    // const [photo, setPhoto] = useState<any>();
    const refRBSheet = useRef();

    useEffect(() => {
        refRBSheet.current.open();
    },[])

  return (
    <SafeAreaView style={styles.viewContainer}>
        <View style={styles.viewHeader}>
            <TouchableOpacity
                onPress={() => {navigation.goBack()}}
                style={styles.btnCancel}
            >
                <Image style={styles.btnCancel} source={require('../../../assets/icons/header/left.png')}/>
            </TouchableOpacity>

            <StepIndicator
                totalStep={3}
                currentStep={3}
            />
        </View>

        {/* List Menu */}
        <RBSheet 
            ref={refRBSheet} 
            draggable={true} 
            // dragOnContent 
            useNativeDriver={false}
            customStyles={{
                container: {
                    // backgroundColor: 'pink',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 300,
                },
                draggableIcon: {
                    backgroundColor: '#FFFFFF',
                },
                wrapper: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <View style={styles.viewModal}>
                <Text style={styles.txtModalTitle}>Is the ID easy to read?</Text>
                <Text style={styles.txtModalDescription}>Please make sure the text is clear and your entire card is visible.</Text>

                <View style={styles.viewModalButtonGroup}>
                    <Button
                        title='Yes, looks good'
                        type='default'
                        onPress={() => {
                            navigation.navigate('HomeNavigator');
                        }}
                    />
                    
                    <Button
                        title='Retake'
                        type='solid'
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                </View>
            </View>
        </RBSheet>

        {
            (photo) &&
            <Image style={styles.imgPhoto} source={{uri: `file://${photo?.path}`}}/>
        }
    </SafeAreaView>
  )
}

export default IDPhotoScreen    