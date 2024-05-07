import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flexGrow: 1,
        // height: '200%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        alignItems: 'center',
    },

    viewHeader: {
        width: '100%',
        height: 40,
        // backgroundColor: 'pink',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnCancel: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 0,
    },

    viewTopInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 20,
    },

    viewTotalInfo: {
        flex: 1,
        flexDirection: 'column',
    },

    btnQR: {
        width: 44,
        height: 44,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: colors.BorderColor,

        alignItems: 'center',
        justifyContent: 'center',
    },

    imgQR: {
        width: 24,
        height: 24,
    },

    txtQuantity: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtTotal: {
        fontSize: 28,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    viewNoti: {
        width: '100%',
        padding: 15,
        flexDirection: 'column',

        borderWidth: 1,
        borderColor: colors.BorderColor,
        borderRadius: 10,
        gap: 15,

        marginTop: 12,
    },

    txtNotiTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtNotiDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondTextColor, 
    },

    viewGroup: {
        width: '100%',
        marginTop: 30,
    },

    txtGroupTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.PrimaryTextColor,
        marginBottom: 10,
    },

    txtDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondTextColor,
        marginBottom: 15,
    },
})