import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    viewHeader: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'column',
    },

    txtBalance: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtTotal: {
        fontSize: 30,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    viewList: {
        width: '100%',
    },
})