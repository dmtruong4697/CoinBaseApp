import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    viewHeader: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'column'
    },

    btnCancel: {
        width: 24,
        height: 24,
    },

    txtHeaderTitle: {
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    viewGroup: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    viewPrice: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    txtPrice: {
        fontSize: 56,
        fontWeight: '400',
        color: colors.PrimaryColor,
    },

    btnSwap: {
        width: 42,
        height: 42,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: colors.BorderColor,
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        right: 0,
    },

    imgSwap: {
        width: 24,
        height: 24,
    },

    btnPurchase: {
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.BorderColor,
        marginTop: 40,
        marginBottom: 20,
    },

    txtPurchase: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    viewBottom: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: 20,
        alignSelf: 'center',
        flexDirection: 'column',
        gap: 30,
    },

    viewRepeat: {
        width: '100%',
        padding: 10,
    },

    txtRepeatTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
        marginBottom: 10,
    },

    btnRepeat: {
        width: '100%',
        padding: 10,
        borderRadius: 8,
        paddingVertical: 15,
    },

    txtRepeatButton: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },
})