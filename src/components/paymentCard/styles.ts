import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CFCFCF',
        borderRadius: 10,
    },

    imgIcon: {
        width: 24,
        height: 24,
    },

    viewInfo: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: 'column',
    },

    txtName: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtCode: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtLimit: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },
})