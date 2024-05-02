import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    viewHeader: {
        width: '100%',
        marginVertical: 10,
    },

    btnCancel: {
        width: 24,
        height: 24,
    },

    viewGroup: {
        width: '100%',
        marginBottom: 30,
    },

    txtGroupTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.PrimaryTextColor,
        marginBottom: 10,
    },

    viewUserInfo: {
        width: '100%',
        flexDirection: 'column',
        marginVertical: 10,
    },

    txtEmail: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.PrimaryTextColor,
    },

    viewShare: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.BorderColor,
        alignItems: 'center',
        marginVertical: 20,
    },

    txtShare: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondTextColor,
        flex: 1,
        marginRight: 20,
        lineHeight: 25,
    },

    imgBitcoin: {
        width: 42,
        height: 42,
        borderRadius: 1000,
        backgroundColor: 'gray',
    },
})