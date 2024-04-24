import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imgIcon: {
        width: 24,
        height: 24,
    },

    viewText: {
        flex: 1,
        marginHorizontal: 15,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    txtName: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: '#707070',
    },

    imgArrow: {
        width: 24,
        height: 24,
    },
})