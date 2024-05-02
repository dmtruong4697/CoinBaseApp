import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },

    viewText: {
        flex: 1,
        marginRight: 10,
        flexDirection: 'column',
        // justifyContent: 'center',
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    imgRight: {
        width: 20,
        height: 20,
    },

    btnToggle: {
        width: 52,
        height: 32,
        borderRadius: 20,
        backgroundColor: '#CFCFCF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 1,
    },

    btnTogleItem: {
        width: 30,
        height: 30,
        borderRadius: 1000,
        backgroundColor: '#FFFFFF',
    },
})