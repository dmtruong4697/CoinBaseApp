import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    ViewTopInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },

    viewTrending: {
        flex: 1,
        marginRight: 15,
        flexDirection: 'column',
    },

    txtPast: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtTrend: {
        fontSize: 30,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    btnSearch: {
        height: 42,
        width: 42,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: colors.BorderColor,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgSearch: {
        height: 24,
        width: 24,
    },

    viewTabGroup: {
        width: '100%',
        height: 26,
        marginVertical: 12,
    },

    btnTab: {
        height: 26,
        // width: 30,
        paddingHorizontal: 6,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },

    txtTab: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.SecondTextColor,
    },
})