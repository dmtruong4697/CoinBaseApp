import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: 138,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.BorderColor,
        padding: 15,
        flexDirection: 'column',
    },

    imgIcon: {
        width: 32,
        height: 32,
        borderRadius: 1000,
        backgroundColor: colors.BorderColor,
        marginBottom: 20,
    },

    txtName: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtSymbol: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtPrice: {
        fontSize: 14,
        fontWeight: '400',
        color: '#707070',
    },

    txtVolumeChange: {
        fontSize: 28,
        fontWeight: '400',
        color: '#3F845F',
    },

    viewSymbol: {
        width: '100%',
        flexDirection: 'row',
        gap: 5,
    }
})