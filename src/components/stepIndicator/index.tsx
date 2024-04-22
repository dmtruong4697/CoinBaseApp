import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../constants/colors';

interface IProps {
    totalStep: number,
    currentStep: number,
}

const StepIndicator: React.FC<IProps> = ({totalStep, currentStep}) => {

    const renderItem = () => {
        let data: number[] = [];
        for(let i = 1; i<= totalStep; i++) {
            data.push(i);
        }

        return (
            data.map((item) => {
                return (
                <View style={[styles.viewItem, {backgroundColor: (item <= currentStep)? colors.PrimaryColor: '#F3F3F3'}]}/>
                )
            })

        )
    }

  return (
    <View style={styles.viewContainer}>
        {renderItem()}
    </View>
  )
}

export default StepIndicator