import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        // flex: 1,
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

    txtTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: '#111111',
        marginBottom: 15,
        marginTop: 10,
    },

    txtDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: '#707070',
        marginBottom: 20,
        textAlign: 'center',
    },

    imgWallet: {
        width: 270,
        height: 190,
        marginBottom: 20,
    },

    viewIntroGroup: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 30,
    },

    txtGroupTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
        marginBottom: 12,
    },

    viewWatchList: {
        width: '100%',
        marginTop: 32,
    },

    txtBlockChain: {
        fontSize: 18,
        fontWeight: '400',
        color: '#707070',
        marginBottom: 10,
    },
})