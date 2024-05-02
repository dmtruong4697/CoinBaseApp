import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // padding: 15,
    },

    viewHeader: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'column',
        padding: 15,
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
        marginTop: 15,
    },

    txtQuantity: {
        fontSize: 28,
        fontWeight: '400',
        color: colors.PrimaryColor,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },

    viewInfo: {
        flex: 1,
        padding: 15,
        borderTopWidth:1,
        borderBottomWidth: 1,
        borderColor: colors.BorderColor,
        flexDirection: 'column',
        marginBottom: 10,
    },

    viewInfoItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },

    txtItemName: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtItemContent: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.PrimaryTextColor,
    },

    viewBottom: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
    },

    viewAdditionInfo: {
        width: '100%',
        // padding: 15,
        flexDirection: 'column',
        marginVertical: 20,
        gap: 10,
    },

    txtAdditonInfo: {
         fontSize: 14,
         fontWeight: '400',
         color: colors.SecondTextColor,
    },

    txtAdditionLink: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.PrimaryColor,
    },

    btnMore: {
        width: 14,
        height: 14,
        borderRadius: 1000,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtMore: {
        fontSize: 10,
        fontWeight: '600',
        color: '#FFFFFF',
    },

    txtCrypto: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtDollar: {
        fontSize: 28,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    viewPrice: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'center',
    }
})