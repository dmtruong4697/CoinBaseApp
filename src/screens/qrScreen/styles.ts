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

    viewQRCard: {
        width: '100%',
        flexDirection: 'column',

        borderWidth: 1,
        borderColor: colors.BorderColor,
        borderRadius: 10,

        marginTop: 20,
    },

    viewQR: {
        width: '100%',
        height: 306,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.BorderColor,
    },

    imgQR: {
        width: 198,
        height: 198,
    },

    viewQRInfo: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    viewAddress: {
        flex: 1,
        flexDirection: 'column',
    },

    txtAddress: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtCode: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    btnCopy: {
        width: 75,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.BorderColor,
    },

    txtCopy: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    viewButtonGroup: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})