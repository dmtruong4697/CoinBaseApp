import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        padding: 15,
    },

    viewHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    viewInputContainer: {
        width: '70%',
        padding: 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.BorderColor,
        borderRadius: 4,
    },

    inputField: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
        marginRight: 10,
    },

    btnClear: {
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgClear: {
        width: 18,
        height: 18,
    },

    txtCancel: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },
})