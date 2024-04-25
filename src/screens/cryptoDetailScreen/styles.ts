import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        height: '200%',
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
    },

    viewPriceInfo: {
        flex: 1,
        flexDirection: 'column',
    },

    btnFavorite: {
        width: 42,
        height: 42,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: colors.BorderColor,

        alignItems: 'center',
        justifyContent: 'center',
    },

    imgFavorite: {
        width: 24,
        height: 24,
    },

    txtNamePrice: {
        fontSize: 14,
        fontWeight: '400',
        color: '#707070',
    },

    txtPrice: {
        fontSize: 30,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtQuote: {
        fontSize: 14,
        fontWeight: '400',
        color: '#3F845F',
    },

    viewChart: {
        width: '100%',
        height: 364,
        marginHorizontal: 12,
    },

    viewTabGroup: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    btnTab: {
        height: 20,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtTab: {
        fontSize: 14,
        fontWeight: '400',
        color: '#707070',
    },
})