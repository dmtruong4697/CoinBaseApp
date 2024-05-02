
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

interface IProps {}

const CameraScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission()

    const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera)
    Reanimated.addWhitelistedNativeProps({
        zoom: true,
    })

    const refRBSheet = useRef();

    const camera = useRef<Camera>(null)
    const [photo, setPhoto] = useState<any>();
    const handleTakingPhoto = async() => {
        const image = await camera.current.takePhoto();
        const result = await fetch(`file://${image.path}`)
        const data = await result.blob();
        console.log(data)
        setPhoto(image);
        if(photo) navigation.navigate('IDPhoto', {photo: photo});
    }

    useEffect(() => {
        if(hasPermission == false) {
            requestPermission();
        }
    })
  return (
    <SafeAreaView style={styles.viewContainer}>
        <ReanimatedCamera
            style={{width: '100%', height: '100%', position: 'absolute', zIndex: 1, }}
            device={device}
            isActive={true}
            ref={camera}
            photo={true}
        />
        <View style={{width: '100%', height: '20%', position: 'absolute', top: 0, zIndex: 2, backgroundColor: '#000000', opacity: 0.3}}/>
        <View style={{width: '100%', height: '50%', position: 'absolute', bottom: 0, zIndex: 2, backgroundColor: '#000000', opacity: 0.3}}/>
        <View style={{width: '5%', height: '30%', position: 'absolute', left: 0, top:'20%', zIndex: 2, backgroundColor: '#000000', opacity: 0.3}}/>
        <View style={{width: '5%', height: '30%', position: 'absolute', right: 0, top:'20%', zIndex: 2, backgroundColor: '#000000', opacity: 0.3}}/>

        <View style={{width: 20, height: 20, position: 'absolute', top: '20%', left: '5%', borderTopWidth: 2, borderLeftWidth: 2, borderColor: '#f2f2f2', zIndex: 2}}/>
        <View style={{width: 20, height: 20, position: 'absolute', top: '20%', right: '5%', borderTopWidth: 2, borderRightWidth: 2, borderColor: '#f2f2f2', zIndex: 2}}/>
        <View style={{width: 20, height: 20, position: 'absolute', bottom: '50%', left: '5%', borderBottomWidth: 2, borderLeftWidth: 2, borderColor: '#f2f2f2', zIndex: 2}}/>
        <View style={{width: 20, height: 20, position: 'absolute', bottom: '50%', right: '5%', borderBottomWidth: 2, borderRightWidth: 2, borderColor: '#f2f2f2', zIndex: 2}}/>


        {/* <View style={{width: '100%', height: '36%',borderWidth: 22, borderColor: 'pink', borderRadius: 35, position: 'absolute', top: '17%', alignSelf: 'center', zIndex: 2,}}/> */}

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

        <View style={styles.viewButtonGroup}>
            <TouchableOpacity
                style={styles.btnCapture}
                onPress={() => {
                    handleTakingPhoto();
                }}
            >
                <View style={styles.viewButton}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnSwap}
            >
                <Image style={styles.btnSwap} source={require('../../../assets/icons/cameraScreen/camera.png')}/>
            </TouchableOpacity>
        </View>

        <View style={styles.viewText}>
            <Text style={styles.txtTitle}>Take a photo of your bill</Text>
            <Text style={styles.txtDescription}>Be sure your document shows:</Text>
            <Image style={{width: 30, height: 30, }} source={{uri: `file://${photo?.path}`}}/>
        </View>

        {/* List Menu */}
        {/* <RBSheet 
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
                            // navigation.navigate('IntroSecure');
                            refRBSheet.current.close();
                        }}
                    />
                    
                    <Button
                        title='Retake'
                        type='solid'
                        onPress={() => {
                            refRBSheet.current.close();
                        }}
                    />
                </View>
            </View>
        </RBSheet>

        {
            (photo) &&
            <Image style={styles.viewPhoto} source={{uri: `file://${photo?.path}`}}/>
        } */}
    </SafeAreaView>
  )
}

export default CameraScreen    